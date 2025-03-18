import { Link } from "react-router-dom";

export default function LatestArticles() {
    const articles = [
      {
        id: 1,
        title: "Leo Vitae Nibh Malesuada.",
        date: "08 NOV",
        comments: 5,
        image: "https://bigbag-html.netlify.app/assets/img/home/articles/articles-02.jpg",
      },
      {
        id: 2,
        title: "Malesuada Pulvinar Quis Fring.",
        date: "29 OCT",
        comments: 4,
        image: "https://bigbag-html.netlify.app/assets/img/home/articles/articles-01.jpg",
      },
      {
        id: 3,
        title: "Proin Lectus Sed Tincidunt Auctor.",
        date: "15 SEP",
        comments: 3,
        image: "https://bigbag-html.netlify.app/assets/img/home/articles/articles-03.jpg",
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto p-6 pt-10 pb-10">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-300">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="relative group cursor-pointer">
              <div className="relative">
                <img src={article.image} alt={article.title} className="w-full rounded-lg" />
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-bold text-gray-900 shadow-md rounded">
                  {article.date}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">by Abdus / 
                  <Link to="/comments" className="text-blue-500 hover:underline">
                    {article.comments} Comments
                  </Link>
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis nulla sed turpis pharetra pretium nec eu sem.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
