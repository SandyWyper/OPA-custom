import React from 'react';
import PropTypes from 'prop-types';

function SvgCall({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512.076 512.076"
      version="1.1"
      viewBox="0 0 512.076 512.076"
      xmlSpace="preserve"
      className={className}
    >
      <path
        d="M499.639 396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508 6.579l-30.191 38.818a12.903 12.903 0 01-16.546 3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453l-3.149-5.743a12.92 12.92 0 013.413-16.606l38.792-30.182c12.412-9.725 15.279-27.351 6.588-40.508l-69.12-103.646C109.12 1.056 91.25-2.966 77.461 5.323L34.12 31.358A61.136 61.136 0 006.242 67.539c-15.607 56.866-3.866 155.008 140.706 299.597 115.004 114.995 200.619 145.92 259.465 145.92a151.181 151.181 0 0040.107-5.239 61.079 61.079 0 0036.181-27.878l26.061-43.315c8.301-13.792 4.281-31.673-9.123-40.585zm-5.581 31.829l-26.001 43.341a44.103 44.103 0 01-26.027 20.173c-52.497 14.413-144.213 2.475-283.008-136.32S8.29 124.559 22.703 72.054a44.17 44.17 0 0120.198-26.061l43.341-26.001c5.983-3.6 13.739-1.855 17.604 3.959l37.547 56.371 31.514 47.266c3.774 5.707 2.534 13.356-2.85 17.579l-38.801 30.182c-11.808 9.029-15.18 25.366-7.91 38.332l3.081 5.598c10.906 20.002 24.465 44.885 73.967 94.379 49.502 49.493 74.377 63.053 94.37 73.958l5.606 3.089c12.965 7.269 29.303 3.898 38.332-7.91l30.182-38.801c4.224-5.381 11.87-6.62 17.579-2.85l103.637 69.12c5.818 3.862 7.563 11.622 3.958 17.604zM291.161 86.39c80.081.089 144.977 64.986 145.067 145.067 0 4.713 3.82 8.533 8.533 8.533s8.533-3.82 8.533-8.533c-.099-89.503-72.63-162.035-162.133-162.133-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
        transform="translate(-1 -1)"
      ></path>
      <path
        d="M291.161 137.59c51.816.061 93.806 42.051 93.867 93.867a8.533 8.533 0 0017.066 0c-.071-61.238-49.696-110.863-110.933-110.933-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
        transform="translate(-1 -1)"
      ></path>
      <path
        d="M291.161 188.79c23.552.028 42.638 19.114 42.667 42.667a8.533 8.533 0 0017.066 0c-.038-32.974-26.759-59.696-59.733-59.733-4.713 0-8.533 3.82-8.533 8.533s3.82 8.533 8.533 8.533z"
        transform="translate(-1 -1)"
      ></path>
    </svg>
  );
}
SvgCall.propTypes = {
  className: PropTypes.string
};

export default SvgCall;
