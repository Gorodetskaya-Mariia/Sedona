
var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [0, 2500],
    connect: true,
    tooltips: [false, wNumb({decimals: 0})],
    range: {
        'min': 0,
        'max': 3000
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
});

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

	input.addEventListener('change', function () {
			stepsSlider.noUiSlider.setHandle(handle, Math.round(this.value));
	});

	input.addEventListener('keydown', function (e) {

			var values = Math.round(stepsSlider.noUiSlider.get());
			var value = Math.round(Number(values[handle]));

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = stepsSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

					case 13:
							stepsSlider.noUiSlider.setHandle(handle, Math.round(this.value));
							break;
							

					case 38:

							// Get step to go increase slider value (up)
							position = Math.round(step[1]);

							// false = no step is set
							if (position === false) {
									position = 1;
							}

							// null = edge of slider
							if (position !== null) {
									stepsSlider.noUiSlider.setHandle(handle, Math.round(value + position));
							}

							break;

					case 40:

							position = Math.round(step[0]);

							if (position === false) {
									position = 1;
							}

							if (position !== null) {
									stepsSlider.noUiSlider.setHandle(handle, Math.round(value - position));
							}

							break;
			}
	});
});
