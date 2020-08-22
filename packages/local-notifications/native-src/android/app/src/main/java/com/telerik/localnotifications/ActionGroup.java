package com.telerik.localnotifications;

import android.content.Context;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static android.os.Build.VERSION.SDK_INT;
import static android.os.Build.VERSION_CODES.N;

public final class ActionGroup {

  // Saves all groups for later lookup.
  private static final Map<String, ActionGroup> groups = new HashMap<String, ActionGroup>();

  // The ID of the action group.
  private final String id;

  // List of actions
  private final Action[] actions;

  /**
   * Lookup the action groups with the specified group id.
   *
   * @param id The ID of the action group to find.
   * @return Null if no group was found.
   */
  public static ActionGroup lookup(String id) {
    return groups.get(id);
  }

  /**
   * Register the action group for later lookup.
   *
   * @param group The action group to register.
   */
  public static void register(ActionGroup group) {
    groups.put(group.getId(), group);
  }

  /**
   * Unregister the action group.
   *
   * @param id The id of the action group to remove.
   */
  public static void unregister(String id) {
    groups.remove(id);
  }

  /**
   * Check if a action group with that id is registered.
   *
   * @param id The id of the action group to check for.
   */
  public static boolean isRegistered(String id) {
    return groups.containsKey(id);
  }

  /**
   * Creates an action group by parsing the specified action specs.
   *
   * @param list The list of actions.
   * @return A new action group.
   */
  public static ActionGroup parse(Context context, JSONArray list) {
    return parse(context, null, list);
  }

  /**
   * Creates an action group by parsing the specified action specs.
   *
   * @param id   The id for the action group.
   * @param list The list of actions.
   * @return A new action group.
   */
  public static ActionGroup parse(Context context, String id, JSONArray list) {
    List<Action> actions = new ArrayList<Action>(list.length());

    for (int i = 0; i < list.length(); i++) {
      JSONObject opts = list.optJSONObject(i);
      String type = opts.optString("type", "button");

      if (type.equals("input") && SDK_INT < N) {
        Log.w("Action", "Type input is not supported");
        continue;
      }

      if (!(type.equals("button") || type.equals("input"))) {
        Log.w("Action", "Unknown type: " + type);
        continue;
      }

      actions.add(new Action(context, opts));
    }

    return new ActionGroup(id, actions.toArray(new Action[actions.size()]));
  }

  /**
   * Creates an action group.
   *
   * @param id      The ID of the group.
   * @param actions The list of actions.
   */
  private ActionGroup(String id, Action[] actions) {
    this.id = id;
    this.actions = actions;
  }

  /**
   * Gets the action group id.
   */
  public String getId() {
    return id;
  }

  /**
   * Gets the action list.
   */
  public Action[] getActions() {
    return actions;
  }

}