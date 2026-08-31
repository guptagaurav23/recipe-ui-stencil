# recipe-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                         | Type      | Default     |
| ------------- | -------------- | --------------------------------------------------- | --------- | ----------- |
| `category`    | `category`     | Category of the recipe, e.g. "Dessert", "Seafood"   | `string`  | `undefined` |
| `imageUrl`    | `image-url`    | URL of the recipe's image (thumbnail)               | `string`  | `undefined` |
| `isFavorite`  | `is-favorite`  | Whether this recipe is currently marked as favorite | `boolean` | `false`     |
| `recipeTitle` | `recipe-title` | The title of the recipe                             | `string`  | `undefined` |


## Events

| Event             | Description | Type                                    |
| ----------------- | ----------- | --------------------------------------- |
| `favoriteToggled` |             | `CustomEvent<{ recipeTitle: string; }>` |


## Slots

| Slot        | Description |
| ----------- | ----------- |
| `"actions"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
