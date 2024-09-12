
import SearchFilter from '../components/SearchFilter';

export default function Home() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  return (
    <div>
      <h1>Search Filter Example</h1>
      <SearchFilter items={items} />
    </div>
  );
}
