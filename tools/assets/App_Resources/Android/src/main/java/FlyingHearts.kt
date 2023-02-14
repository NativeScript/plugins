package com.example

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlin.random.Random

enum class HeartState {
    Show,
    Hide
}

fun Path.heartPath(size: Size): Path {
	//the logic is taken from StackOverFlow [answer](https://stackoverflow.com/a/41251829/5348665)and converted into extension function

	val width: Float = size.width
	val height: Float = size.height

	// Starting point
	moveTo(width / 2, height / 5)

	// Upper left path
	cubicTo(
		5 * width / 14, 0f,
		0f, height / 15,
		width / 28, 2 * height / 5
	)

	// Lower left path
	cubicTo(
		width / 14, 2 * height / 3,
		3 * width / 7, 5 * height / 6,
		width / 2, height
	)

	// Lower right path
	cubicTo(
		4 * width / 7, 5 * height / 6,
		13 * width / 14, 2 * height / 3,
		27 * width / 28, 2 * height / 5
	)

	// Upper right path
	cubicTo(
		width, height / 15,
		9 * width / 14, 0f,
		width / 2, height / 5
	)
	return this
}

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun Heart(modifier: Modifier, horizontalPadding: Int, bottomMargin: Int) {
    val width = LocalConfiguration.current.screenWidthDp
    val height = LocalConfiguration.current.screenHeightDp - bottomMargin - 150

    val yRandom = Random.nextInt(0, height / 2)
    val xRandom = Random.nextInt(horizontalPadding, (width - horizontalPadding))

    val state = remember {
        mutableStateOf(HeartState.Show)
    }

    val offsetYAnimation: Dp by animateDpAsState(
        targetValue = when (state.value) {
            HeartState.Show -> height.dp
            else -> yRandom.dp
        },
        animationSpec = tween(1000)
    )

    val offsetXAnimation: Dp by animateDpAsState(
        targetValue = when (state.value) {
            HeartState.Show -> (((width - (horizontalPadding * 2)) / 2) + 8).dp
            else -> xRandom.dp
        },
        animationSpec = tween(1000)
    )

    LaunchedEffect(key1 = state, block = {
        state.value = when (state.value) {
            HeartState.Show -> HeartState.Hide
            HeartState.Hide -> HeartState.Show
        }
    })

    AnimatedVisibility(
        visible = state.value == HeartState.Show,
        enter = fadeIn(animationSpec = tween(durationMillis = 250)),
        exit = fadeOut(animationSpec = tween(durationMillis = 700))
    ) {
        Canvas(modifier = modifier
            .offset(y = offsetYAnimation, x = offsetXAnimation),
            onDraw = {
                val path = Path().apply {
                    heartPath(Size(120f, 120f))
                }
                drawPath(
                    path = path,
                    color = Color.Red,
                )
            }
        )
    }
}

@Composable
fun Screen() {
    val heartCount = remember { mutableStateOf(0) }

    Box(modifier = Modifier.fillMaxSize()) {
        repeat(heartCount.value) {
            Heart(
                modifier = Modifier
                    .fillMaxSize()
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 36.dp),
                horizontalPadding = 24,
                bottomMargin = 110
            )
        }

        Button(
            onClick = {
                heartCount.value++
            },
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(24.dp)
                .wrapContentHeight()
                .wrapContentWidth()
        ) {
            Text(
                text = "Like",
                color = Color.White
            )
        }

    }
}

class FlyingHearts {

    fun generateComposeView(view: ComposeView): ComposeView {

        return view.apply {
            setContent {
                Screen()
            }
        }
    }

    fun updateData(value: Map<Any, Any>) {

    }

    var onEvent: ((String) -> Unit)? = null

}
