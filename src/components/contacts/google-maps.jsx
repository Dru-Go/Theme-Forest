import React from 'react'

export default function googleMaps() {
    return (
      <section class="google-map-section">
        <div class="container">
          <div class="google-map-area">
            <div
              class="google-map"
              id="contact-google-map"
              data-map-lat="40.712776"
              data-map-lng="-74.005974"
              data-icon-path="images/icons/map-marker.png"
              data-map-title="Brooklyn, New York, United Kingdom"
              data-map-zoom="12"
              data-markers='{
                        "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","images/icons/map-marker.png"]
                    }'
            ></div>
          </div>
        </div>
      </section>
    );
}
