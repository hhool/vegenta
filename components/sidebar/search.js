import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import cheerio from "cheerio";
import Link from "next/link";

import { useRouter } from "next/router";

const Search = ({visit}) => {
  const router = useRouter();
  const [val, setVal] = useState("");
  const [content, setContent] = useState([]);
  useEffect(() => {
    var SearchBar = document.getElementById("search");
    var SearchInput = document.getElementById("searchinput");
    document.addEventListener("click", function (event) {
      var isClickInside = SearchBar.contains(event.target);

      if (!isClickInside) {
        SearchInput.style.maxWidth = 0;
        SearchInput.style.marginLeft = 0;
        setContent([]);
        setVal("");
      }
    });
  }, []);
  const handleSearch = async (e) => {
    setVal(e.target.value);
    let d = await axios.get(
      "https://ajax.gogocdn.net/site/loadAjaxSearch?keyword=" + val
    );
    d = d.data.content.replaceAll("category/", "/details/");
    var myList = [];
    var $ = cheerio.load(d);
    $("a").each(function (index, element) {
      let result = {};
      let title = $(this).text();
      let link = $(this).attr().href;
      let image = $(this)
        .children("div")
        .attr()
        .style.slice(15)
        .replace(/[("")]/g, "");
      result = { title, link, image };
      myList.push(result);
    });

    setContent(myList);
  };
  const handleClick = () => {
    var SearchBar = document.getElementById("search");
    var SearchInput = document.getElementById("searchinput");
    SearchInput.focus();
    SearchInput.style.maxWidth = "800px";
    SearchInput.style.marginLeft = "0.7rem";
    SearchBar.style.width = "auto";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${val}/1`);
    setContent([]);
    setVal("");
  };
  const theme = useSelector((state) => state.theme);
  return (
    <>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">❤️ My List</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">🗓️ Recently Added</a>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
  <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">⭐ Popular</a>
    <div><p>{visit}</p></div>
    <form className="absolute cursor-pointer right-0" onSubmit={handleSubmit}>
      <div
        className={`${theme.button.background} ${theme.button.text} h-10 w-10  rounded-full flex  p-2.5 shadow-2xl relative right-0`}
        id="search"
        onClick={handleClick}
      >
        <FaSearch size={20} />
        <input
          value={val}
          autoComplete={"off"}
          onChange={handleSearch}
          className={`${theme.button.background} ${theme.button.text} border-none outline-none max-w-0 ease-in-out transition-all duration-700`}
          placeholder="Search for anime..."
          id="searchinput"
        />
        {content.length > 0 && (
          <div
            className={` autocomplete absolute left-0 px-1 py-0 top-11 shadow-2xl transition-all duration-200 rounded-xl ${theme.button.text} w-full ${theme.button.background}`}
          >
            {content?.map((Item, index) => (
              <Link href={Item.link} key={index}>
                <div
                  className={`flex shadow-xl w-full justify-between cursor-pointer p-2 rounded-xl my-1 text-right ${theme.text.selected} ${theme.background}`}
                  onClick={() => setContent([])}
                >
                  <div className="rounded-full h-10 w-10 ">
                    <img
                      src={Item.image}
                      className="w-10 h-10 object-cover rounded-full"
                      alt={Item.title}
                    />
                  </div>
                  <span className="w-3/4">{Item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </form>
    </>
  );
};

export default Search;
