import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'day-planner',
  styleUrl: 'day-planner.css',
  shadow: true,
})
export class DayPlanner {
  /**
   * The day of the week this slot represents, e.g. "Monday"
   */
  @Prop() dayLabel: string;

  /**
   * Title of the recipe assigned to this day, if any
   */
  @Prop() recipeTitle: string;

  /**
   * Thumbnail image of the assigned recipe, if any
   */
  @Prop() imageUrl: string;

  /**
   * Emitted when the user clicks "remove" on an assigned meal
   */
  @Event() mealRemoved: EventEmitter<{ dayLabel: string }>;

  private handleRemoveClick = () => {
    this.mealRemoved.emit({ dayLabel: this.dayLabel });
  };

  private get hasMeal(): boolean {
    return !!this.recipeTitle;
  }

  render() {
    return (
      <Host>
        <div class="card day-slot">
          <div class="card-header fw-bold text-center">{this.dayLabel}</div>
          <div class="card-body text-center">
            {this.hasMeal ? (
              <div class="assigned-meal">
                {this.imageUrl && (
                  <img src={this.imageUrl} alt={this.recipeTitle} class="img-fluid rounded mb-2" />
                )}
                <p class="mb-2">{this.recipeTitle}</p>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger"
                  onClick={this.handleRemoveClick}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div class="empty-slot">
                <p class="text-muted mb-2">No meal planned</p>
                <slot name="assign-action"></slot>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}