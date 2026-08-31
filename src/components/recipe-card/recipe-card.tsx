import { Component, Host, h, Prop,Event,EventEmitter } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: true,
})
export class RecipeCard {
  /**
   * The title of the recipe
   */
  @Prop() recipeTitle: string;

  /**
   * URL of the recipe's image (thumbnail)
   */
  @Prop() imageUrl: string;

  /**
   * Category of the recipe, e.g. "Dessert", "Seafood"
   */
  @Prop() category: string;

  /**
   * Whether this recipe is currently marked as favorite
   */
  @Prop() isFavorite: boolean = false;
  @Event() favoriteToggled: EventEmitter<{ recipeTitle: string }>;

  private handleFavoriteClick = () => {
    this.favoriteToggled.emit({ recipeTitle: this.recipeTitle });
  };
  render() {
    return (
      <Host>
        <div class="card">
          <img src={this.imageUrl} alt={this.recipeTitle} class="card-img-top" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
              <h5 class="card-title">{this.recipeTitle}</h5>
              <button
                type="button"
                class="btn btn-sm btn-link p-0"
                onClick={this.handleFavoriteClick}
                aria-label="Toggle favorite"
              >
                {this.isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            {this.category && <p class="card-text text-muted">{this.category}</p>}

            <div class="card-actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}