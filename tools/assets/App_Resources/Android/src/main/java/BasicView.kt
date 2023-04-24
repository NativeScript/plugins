package com.example

import android.content.Context
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.ComposeView
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel

class BasicView {
    data class ExampleUiState(
        val text: String = ""
    ) {}
    class ExampleViewModel(
    ) : ViewModel() {

        var uiState by mutableStateOf(ExampleUiState())
    }

    var mViewModel = ExampleViewModel()
    fun generateComposeView(view: ComposeView): ComposeView {

        return view.apply {
            // Dispose of the Composition when the view's LifecycleOwner
            // is destroyed
            //setViewCompositionStrategy(DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                MaterialTheme {

                    val uiState = mViewModel.uiState;
                    // In Compose world
                    Text(uiState.text)
                }
            }
        }
    }

    fun updateData(value: Map<Any, Any>) {
        val v = value["data"] as String;
        onEvent?.invoke(v)
        mViewModel.uiState = ExampleUiState(v);
    }

    var onEvent: ((String) -> Unit)? = null

}



@Composable
fun MessageCard(name: String) {
    Text(text = "Hello $name!")
}
