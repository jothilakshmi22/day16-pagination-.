//   /* <nav aria-label="Page navigation example">
//         <ul class="pagination">
//           <li class="page-item"><a class="page-link" href="#">Previous</a></li>
//           <li class="page-item"><a class="page-link" href="#">1</a></li>
//           <li class="page-item"><a class="page-link" href="#">2</a></li>
//           <li class="page-item"><a class="page-link" href="#">3</a></li>
//           <li class="page-item"><a class="page-link" href="#">Next</a></li>
//         </ul>
//       </nav>

var navTag = document.createElement("nav");
navTag.setAttribute("aria-label", "Page navigation example");

var ulTag = document.createElement("ul");
ulTag.setAttribute("class", "pagination justify-content-center pagination-lg center");

document.body.append(navTag);
navTag.append(ulTag);

const data = [
  { value: "previous" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "next" },
];
data.forEach(({ value }) => {
  var liTag1 = document.createElement("li");
  liTag1.setAttribute("class", "page-item");

  var aTag1 = document.createElement("a");
  aTag1.setAttribute("class", "page-link design");
  aTag1.setAttribute("href", "#");
  aTag1.innerText = value;
  ulTag.append(liTag1);
  liTag1.append(aTag1);
});
