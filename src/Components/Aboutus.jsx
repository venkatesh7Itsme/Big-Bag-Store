import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  const team = [
    {
      name: "Adam Smith",
      title: "CEO",
      image: "https://bigbag-html.netlify.app/assets/img/about-us/people-01.jpg"
    },
    {
      name: "Jennifer",
      title: "CTO",
      image: "https://bigbag-html.netlify.app/assets/img/about-us/people-02.jpg"
    },
    {
      name: "Andrew Haige",
      title: "Marketing Director",
      image: "https://bigbag-html.netlify.app/assets/img/about-us/people-03.jpg"
    },
    {
      name: "Andy Blakly",
      title: "Creative Director",
      image: "https://bigbag-html.netlify.app/assets/img/about-us/people-04.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 py-3 px-6 flex justify-between items-center">
        <div className="text-gray-500 font-light text-xl">ABOUT US</div>
        <nav>
          <ul className="flex space-x-4 text-xs text-gray-500">
            <li>
              <Link to="/" className="font-bold">HOME</Link>
            </li>
            <li>
              <Link to="/about" className="font-bold">ABOUT US</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Us Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl text-gray-700 mb-8">Suspendisse Suscipit Vestibulum Dignissim</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://bigbag-html.netlify.app/assets/img/about-us/title-img.jpg" 
              alt="Woman shopping" 
              className="w-full"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600 mb-4">
            Mauris lobortis augue ex, ut faucibus nisi mollis ac. Sed volutpat scelerisque ex ut ullamcorper. Cras at velit quis sapien dapibus laoreet a id odio. Sed sit amet accumsan ante, eu congue metus. Aenean eros tortor, cursus quis feugiat sed, vestibulum vel purus. Etiam aliquam turpis quis blandit finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor placerat lectus, facilisis ornare leo tincidunt vel. Duis rutrum felis felis, eget malesuada massa tincidunt a.
            </p>
            <ul className="text-gray-600">
              {['Neque porro quisquam est', 'qui dolorem ipsum quia dolor sit amet',
                'consectetur, adipisci velit, sed quia', 'non numquam eius modi tempora incidunt',
                'ut labore et dolore magnam aliquam'].map((text, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="text-teal-500 mr-2">◆</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>


      <div className="flex flex-col min-h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://bigbag-html.netlify.app/assets/img/about-us/store-bg.jpg')" }}>
        <main className="container mx-auto px-6 py-24 flex flex-col ">
        <h1 className="text-3xl text-white mb-12">Our Store Locations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-white text-xl mb-4">New York</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Krakovská 1307/22, 110 00 N.Y</li>
              <li>Vězeňská 910/2, 110 00 N.Y-Staré</li>
              <li>Město Na Hřebenkách 2, 150 00 N.Y</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-white text-xl mb-4">Paris</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Bebelpl. 1, 10117 Paris</li>
              <li>Jablonskistraße 16, 10405 Paris</li>
              <li>Rigaer Str. 9, 10247 Paris</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-white text-xl mb-4">New York</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Krakovská 1307/22, 110 00 N.Y</li>
              <li>Vězeňská 910/2, 110 00 N.Y-Staré</li>
              <li>Město Na Hřebenkách 2, 150 00 N.Y</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-white text-xl mb-4">Paris</h2>
            <ul className="text-gray-400 space-y-2">
              <li>Bebelpl. 1, 10117 Paris</li>
              <li>Jablonskistraße 16, 10405 Paris</li>
              <li>Rigaer Str. 9, 10247 Paris</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <button className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition-all">
            CHECK MORE
          </button>
        </div>
      </main>
    </div>



      {/* Our People Section */}
      <div className="flex flex-col min-h-screen bg-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-3xl text-gray-800 mb-12">Our People</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full mb-4 "
                />
                <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutUs;
