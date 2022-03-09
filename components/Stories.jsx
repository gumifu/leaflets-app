import { faker } from '@faker-js/faker';
import { useEffect,useState } from 'react';
import Story from './Story';

const Stories = () => {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
    setSuggestions(suggestions);
  }, [])

  return (
    <div>
      <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-100">
        {suggestions.map((profile) => (
          <Story key={profile.id} img={profile.avatar} username={profile.name}/>
        ))}
      </div>

    </div>
  )
}

export default Stories
