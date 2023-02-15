import React from "react";

const help = () => {
  return (
    <>
    <br/><br/><br/><br/>
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
      >
        “Try using VPN to watch videos !!”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        avalynn
      </div>
    </figcaption>
  </div>
</figure>
    </>
  );
};

export default help;
// class={`${theme.text.selected} block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
