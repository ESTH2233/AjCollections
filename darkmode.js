
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript for simple review carousel
document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review");
  let currentReviewIndex = 0;

  function showNextReview() {
    reviews[currentReviewIndex].style.display = "none"; // Hide the current review
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Get the next review index
    reviews[currentReviewIndex].style.display = "block"; // Show the next review
  }

  // Initially hide all reviews except the first
  reviews.forEach((review, index) => {
    if (index !== 0) {
      review.style.display = "none";
    }
  });

  // Automatically rotate reviews every 5 seconds
  setInterval(showNextReview, 5000);
});

// JavaScript for Paginating Reviews
document.addEventListener("DOMContentLoaded", function () {
  const reviewsPerPage = 3;
  const reviews = document.querySelectorAll(".review-card");
  let currentPage = 1;

  // Hide all reviews initially
  function hideAllReviews() {
    reviews.forEach((review) => (review.style.display = "none"));
  }

  // Show reviews based on current page
  function showReviewsForPage(page) {
    hideAllReviews();
    const start = (page - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    const reviewsToShow = Array.from(reviews).slice(start, end);

    reviewsToShow.forEach((review) => (review.style.display = "block"));
  }

  // Handle pagination links
  function setupPagination() {
    const previousButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");

    previousButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        showReviewsForPage(currentPage);
      }
    });

    nextButton.addEventListener("click", function () {
      const totalPages = Math.ceil(reviews.length / reviewsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        showReviewsForPage(currentPage);
      }
    });

    showReviewsForPage(currentPage);
  }

  setupPagination();
});



