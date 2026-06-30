import { API } from '@/app/api';
import type { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	try {
		const res = await fetch(API.topPage.find, {
			method: 'POST',
			body: JSON.stringify({ firstCategory }),
			headers: new Headers({ 'content-type': 'application/json' }),
			next: { revalidate: 10 }
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch menu: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		
		if (!Array.isArray(data)) {
			throw new Error('Invalid response format: expected array');
		}

		return data;
	} catch (error) {
		console.error('Error fetching menu:', error);
		return [];
	}
}