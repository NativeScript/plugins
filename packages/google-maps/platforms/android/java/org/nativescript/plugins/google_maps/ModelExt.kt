package org.nativescript.plugins.googlemaps

import com.google.android.gms.maps.model.*
import java.lang.ref.PhantomReference
import java.lang.ref.Reference
import java.lang.ref.ReferenceQueue
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicInteger
import kotlin.collections.HashMap


private val bufferRefQue: ReferenceQueue<Any?> = ReferenceQueue()
private val keyMap: HashMap<Reference<Any?>, Any> = HashMap()
private val map: HashMap<Any, Reference<Any?>> = HashMap()
private var executor: ExecutorService = Executors.newSingleThreadExecutor()
private val monitoring: AtomicBoolean = AtomicBoolean()

class ModelExt {
	companion object {
		init{
			startWatch()
		}
	}
}

private fun startWatch() {
	if (monitoring.get()) {
		return
	}
	monitoring.set(true)
	val dropped = AtomicInteger()
	executor.execute {
		while (monitoring.get()) {
			val tmp = bufferRefQue.poll()
			if (tmp != null) {
				val key = keyMap[tmp]
				if (key != null) {
					keyMap.remove(tmp)
					map.remove(key)
					userDataMap.remove(key)
					dropped.getAndIncrement()
				}
			}
		}
	}
}

private fun stopWatch() {
	monitoring.set(false)
	executor.shutdown()
}

fun restartWatch() {
	startWatch()
	executor = Executors.newSingleThreadExecutor()
	startWatch()
}

fun watchItem(key: Any, value: Any?) {
	val ref = PhantomReference(value, bufferRefQue)
	keyMap[ref] = key
	map[key] = ref
}

fun unWatchItem(value: Any) {
	var key: Any? = null
	var ref: Any? = null
	for (entry in map) {
		entry.value.get()?.let {
			if (value == it) {
				key = entry.key
				ref = entry.value
			}
			return
		}
	}

	ref?.let {
		keyMap.remove(ref)
	}

	key?.let {
		map.remove(key)
	}
}

private fun watchRef(buffer: Any) {
	val ref: Reference<Any> = PhantomReference(buffer, bufferRefQue)
}

private val userDataMap = HashMap<Any, HashMap<String, Any>?>()

fun Marker.getUserData(): HashMap<String, Any>? {
	return userDataMap[this]
}

fun Marker.setUserData(value: HashMap<String, Any>?){
	if (value != null) {
		watchItem(value, this)
		userDataMap[this] = value
	} else {
		unWatchItem(this)
		userDataMap.remove(this)
	}
}

fun Circle.getUserData(): HashMap<String, Any>? {
	return userDataMap[this]
}

fun Circle.setUserData(value: HashMap<String, Any>?){
	if (value != null) {
		watchItem(value, this)
		userDataMap[this] = value
	} else {
		unWatchItem(this)
		userDataMap.remove(this)
	}
}

fun Polygon.getUserData(): HashMap<String, Any>? {
	return userDataMap[this]
}

fun Polygon.setUserData(value: HashMap<String, Any>?){
	if (value != null) {
		watchItem(value, this)
		userDataMap[this] = value
	} else {
		unWatchItem(this)
		userDataMap.remove(this)
	}
}

fun Polyline.getUserData(): HashMap<String, Any>? {
	return userDataMap[this]
}

fun Polyline.setUserData(value: HashMap<String, Any>?){
	if (value != null) {
		watchItem(value, this)
		userDataMap[this] = value
	} else {
		unWatchItem(this)
		userDataMap.remove(this)
	}
}

fun GroundOverlay.getUserData(): HashMap<String, Any>? {
	return userDataMap[this]
}

fun GroundOverlay.setUserData(value: HashMap<String, Any>?){
	if (value != null) {
		watchItem(value, this)
		userDataMap[this] = value
	} else {
		unWatchItem(this)
		userDataMap.remove(this)
	}
}