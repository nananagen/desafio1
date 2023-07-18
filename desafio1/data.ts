interface Post {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
  }
  
  const posts: Post[] = [
    {
      id: 1,
      title: 'First Post',
      imageUrl: 'img/imgprincipal.png',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      id: 2,
      title: 'Second Post',
      imageUrl: 'img/imgprincipal.png',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      id: 3,
      title: 'Third Post',
      imageUrl: 'img/imgprincipal.png',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
        id: 4,
        title: 'Fourth Post',
        imageUrl: 'img/imgprincipal.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
        id: 5,
        title: 'Fifth Post',
        imageUrl: 'img/imgprincipal.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
        id: 6,
        title: 'Sixth Post',
        imageUrl: 'img/imgprincipal.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
  ];
  
interface Comment {
    id: number;
    postId: number;
    email: string;
    body: string;
}

  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      email: 'usuário_1@email.com',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      id: 2,
      postId: 1,
      email: 'usuário_2@email.com',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      id: 3,
      postId: 2,
      email: 'usuário_3@email.com',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }
  ];
  
  export { Post, Comment, posts, comments };


  