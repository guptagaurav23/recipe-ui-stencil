# rating-star



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                       | Type      | Default |
| ----------- | ------------ | ------------------------------------------------- | --------- | ------- |
| `maxRating` | `max-rating` | Maximum number of stars to display                | `number`  | `5`     |
| `rating`    | `rating`     | Current rating value, e.g. 4.5                    | `number`  | `0`     |
| `readonly`  | `readonly`   | If true, stars are display-only and not clickable | `boolean` | `false` |


## Events

| Event           | Description                                                     | Type                               |
| --------------- | --------------------------------------------------------------- | ---------------------------------- |
| `ratingChanged` | Emitted when the user clicks a star (only if readonly is false) | `CustomEvent<{ rating: number; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
