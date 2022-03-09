import Post from './Post'

const posts = [
    {
        id: '123',
        shopName: 'ジーズアカデミーFUKUOKA／エンジニア養成学校',
        shopImg: '/gs-logo.png',
        img: 'https://gsacademy.jp/uploads/og-3.png',
        caption: '福岡市エンジニアフレンドリーシティに所属。エンジニアとしての就職だけでなく、フリーランスになるためのお仕事紹介や共同受託仲間探しまでサポート。',
        placeInfo:'福岡県福岡市中央区大名 1-3-41 プリオ大名 1F・2F',
        shopTel:'092-761-5777',
        shopEmail:'fukuoka@gsacademy.jp',
    },
    {
        id: '123',
        shopName: 'ジーズアカデミーFUKUOKA／エンジニア養成学校',
        shopImg: '/gs-logo.png',
        img: 'https://gsacademy.jp/uploads/og-3.png',
        caption: '福岡市エンジニアフレンドリーシティに所属。エンジニアとしての就職だけでなく、フリーランスになるためのお仕事紹介や共同受託仲間探しまでサポート。',
        placeInfo:'福岡県福岡市中央区大名 1-3-41 プリオ大名 1F・2F',
        shopTel:'092-761-5777',
        shopEmail:'fukuoka@gsacademy.jp',
    }
]

const Posts = () => {
  return (
    <div>
        {/* Post */}
          {posts.map((post) => (
              <Post
                  key={post.id}
                  id={post.id}
                  shopName={ post.shopName}
                  shopImg={ post.shopImg}
                  img={ post.img}
                  caption={ post.caption}
                  placeInfo={ post.placeInfo}
                  shopTel={ post.shopTel}
                  shopEmail={ post.shopEmail}
                  />
        ))}
    </div>
  )
}

export default Posts
