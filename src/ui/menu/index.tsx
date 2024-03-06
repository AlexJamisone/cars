import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative">
			<button
				className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				onClick={() => setIsOpen(!isOpen)}
			>
				Действия
				<svg
					className="w-2.5 h-2.5 ms-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
						<li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							<Link href={'/car/create'}>Создать</Link>
						</li>
						<li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							<button>Режим удаления</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
export default Menu;
