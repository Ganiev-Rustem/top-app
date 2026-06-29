
import { getMenu } from '@/api/menu';


export default async function Home() {
	const menu = await getMenu(0);
	return (
		<div>
			главная
			<div>{JSON.stringify(menu)}</div>
			<div>{menu.length}</div>
			
		</div>
	);
}
