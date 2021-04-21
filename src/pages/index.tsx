export default function Home(props) {

  return (
    <div></div>
  )
}

export async function getStaticsProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 3600 * 8
  }
}
