import { faker } from '@faker-js/faker';
import { useEffect } from 'react';

const Stories = () => {

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
  }, [])

  return (
    <div>

    </div>
  )
}

export default Stories
