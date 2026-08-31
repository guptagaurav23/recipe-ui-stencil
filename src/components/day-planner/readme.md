# day-planner



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                             | Type     | Default     |
| ------------- | -------------- | ------------------------------------------------------- | -------- | ----------- |
| `dayLabel`    | `day-label`    | The day of the week this slot represents, e.g. "Monday" | `string` | `undefined` |
| `imageUrl`    | `image-url`    | Thumbnail image of the assigned recipe, if any          | `string` | `undefined` |
| `recipeTitle` | `recipe-title` | Title of the recipe assigned to this day, if any        | `string` | `undefined` |


## Events

| Event         | Description                                               | Type                                 |
| ------------- | --------------------------------------------------------- | ------------------------------------ |
| `mealRemoved` | Emitted when the user clicks "remove" on an assigned meal | `CustomEvent<{ dayLabel: string; }>` |


## Slots

| Slot              | Description |
| ----------------- | ----------- |
| `"assign-action"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
