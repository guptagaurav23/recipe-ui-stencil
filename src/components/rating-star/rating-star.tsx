import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'rating-star',
  styleUrl: 'rating-star.css',
  shadow: true,
})
export class RatingStar {
  /**
   * Current rating value, e.g. 4.5
   */
  @Prop() rating: number = 0;

  /**
   * Maximum number of stars to display
   */
  @Prop() maxRating: number = 5;

  /**
   * If true, stars are display-only and not clickable
   */
  @Prop() readonly: boolean = false;

  /**
   * Emitted when the user clicks a star (only if readonly is false)
   */
  @Event() ratingChanged: EventEmitter<{ rating: number }>;

  private handleStarClick = (starValue: number) => {
    if (this.readonly) return;
    this.ratingChanged.emit({ rating: starValue });
  };

 private renderStars() {
    const stars = [];
    const filledStar = '\u2605'; 
    const emptyStar = '\u2606';  

    for (let i = 1; i <= this.maxRating; i++) {
      const filled = i <= Math.round(this.rating);
      stars.push(
        <span
          class={{ star: true, filled, readonly: this.readonly }}
          onClick={() => this.handleStarClick(i)}
        >
          {filled ? filledStar : emptyStar}
        </span>
      );
    }
    return stars;
  }

  render() {
    return (
      <Host>
        <div class="d-flex align-items-center rating-container" role="img" aria-label={`Rating: ${this.rating} out of ${this.maxRating}`}>
          {this.renderStars()}
          {!this.readonly && <span class="rating-value ms-1 text-muted small">{this.rating}</span>}
        </div>
      </Host>
    );
  }
}