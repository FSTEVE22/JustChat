import { PlusIcon } from '@heroicons/react/20/solid';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useRef, useState } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const directory = {
	A: [
		{
			id: 1,
			name: 'Leslie Abbott',
			email: 'leslie.abbott@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 2,
			name: 'Hector Adams',
			email: 'hector.adams@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 3,
			name: 'Blake Alexander',
			email: 'blake.alexander@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 4,
			name: 'Fabricio Andrews',
			email: 'fabricio.andrews@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	B: [
		{
			id: 5,
			name: 'Angela Beaver',
			email: 'angela.beaver@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 6,
			name: 'Yvette Blanchard',
			email: 'yvette.blanchard@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 7,
			name: 'Lawrence Brooks',
			email: 'lawrence.brooks@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	C: [
		{
			id: 8,
			name: 'Jeffrey Clark',
			email: 'jeffrey.clark@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 9,
			name: 'Kathryn Cooper',
			email: 'kathryn.cooper@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	E: [
		{
			id: 10,
			name: 'Alicia Edwards',
			email: 'alicia.edwards@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 11,
			name: 'Benjamin Emerson',
			email: 'benjamin.emerson@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 12,
			name: 'Jillian Erics',
			email: 'jillian.erics@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 13,
			name: 'Chelsea Evans',
			email: 'chelsea.evans@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	G: [
		{
			id: 14,
			name: 'Michael Gillard',
			email: 'micheal.gillard@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 15,
			name: 'Dries Giuessepe',
			email: 'dries.giuessepe@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	M: [
		{
			id: 16,
			name: 'Jenny Harrison',
			email: 'jenny.harrison@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 17,
			name: 'Lindsay Hatley',
			email: 'lindsay.hatley@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 18,
			name: 'Anna Hill',
			email: 'anna.hill@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	S: [
		{
			id: 19,
			name: 'Courtney Samuels',
			email: 'courtney.samuels@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 20,
			name: 'Tom Simpson',
			email: 'tom.simpson@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	T: [
		{
			id: 21,
			name: 'Floyd Thompson',
			email: 'floyd.thompson@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 22,
			name: 'Leonard Timmons',
			email: 'leonard.timmons@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 23,
			name: 'Whitney Trudeau',
			email: 'whitney.trudeau@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	W: [
		{
			id: 24,
			name: 'Kristin Watson',
			email: 'kristin.watson@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 25,
			name: 'Emily Wilson',
			email: 'emily.wilson@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	Y: [
		{
			id: 26,
			name: 'Emma Young',
			email: 'emma.young@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
};

const Chat = () => {
	const [open, setOpen] = useState(false);

	const [menu, setMenu] = useState(false);

	const router = useRouter();

	const [logout, setLogout] = useState(false);

	const cancelButtonRef = useRef(null);
	return (
		<div className=''>
			<div className='flex h-screen antialiased text-gray-800'>
				<div className='flex flex-row h-full w-full overflow-x-hidden'>
					<div className='md:flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 hidden'>
						<div className='flex flex-row items-center h-12 w-full mb-4'>
							<div className='rounded-2xl'>
								<img
									className='mx-auto h-20 w-auto'
									src='/logo.jpg'
									alt='Your Company'
								/>
							</div>
							<div className='ml-2 font-bold text-2xl'>JustChat</div>
						</div>
						<button
							onClick={() => setOpen(true)}
							type='button'
							className='inline-flex justify-center items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							<PlusIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
							New message
						</button>
						<div className='flex flex-col mt-8 h-full'>
							<div className='flex flex-row items-center justify-between text-xs'>
								<span className='font-bold text-2xl'>Conversations</span>
							</div>
							<div className='flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto'>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full'>
										H
									</div>
									<div className='ml-2 text-sm font-semibold'>Henry Boyd</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full'>
										M
									</div>
									<div className='ml-2 text-sm font-semibold'>Marta Curtis</div>
									<div className='flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none'>
										2
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full'>
										P
									</div>
									<div className='ml-2 text-sm font-semibold'>
										Philip Tucker
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full'>
										C
									</div>
									<div className='ml-2 text-sm font-semibold'>
										Christine Reid
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full'>
										J
									</div>
									<div className='ml-2 text-sm font-semibold'>Jerry Guzman</div>
								</button>
							</div>
							<button
								onClick={() => setLogout(true)}
								type='button'
								className='inline-flex justify-center items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Logout
							</button>
						</div>
					</div>

					<div
						className={`${
							menu ? '' : 'hidden'
						} md:hidden flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0`}>
						<div className='flex flex-row items-center h-12 w-full mb-4'>
							<div className='rounded-2xl'>
								<img
									className='mx-auto h-20 w-auto'
									src='/logo.jpg'
									alt='Your Company'
								/>
							</div>
							<div className='ml-2 font-bold text-2xl'>JustChat</div>
						</div>
						<button
							onClick={() => setOpen(true)}
							type='button'
							className='inline-flex justify-center items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							<PlusIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
							New message
						</button>
						<div className='flex flex-col h-full mt-8'>
							<div className='flex flex-row items-center justify-between text-xs'>
								<span className='font-bold text-2xl'>Conversations</span>
							</div>
							<div className='flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto'>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full'>
										H
									</div>
									<div className='ml-2 text-sm font-semibold'>Henry Boyd</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full'>
										M
									</div>
									<div className='ml-2 text-sm font-semibold'>Marta Curtis</div>
									<div className='flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none'>
										2
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full'>
										P
									</div>
									<div className='ml-2 text-sm font-semibold'>
										Philip Tucker
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full'>
										C
									</div>
									<div className='ml-2 text-sm font-semibold'>
										Christine Reid
									</div>
								</button>
								<button className='flex flex-row items-center hover:bg-gray-100 rounded-xl p-2'>
									<div className='flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full'>
										J
									</div>
									<div className='ml-2 text-sm font-semibold'>Jerry Guzman</div>
								</button>
							</div>
						</div>
						<button
							onClick={() => setLogout(true)}
							type='button'
							className='inline-flex justify-center items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Logout
						</button>
					</div>

					<div className='flex flex-col flex-auto h-full p-2'>
						<div className='flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
							<button
								onClick={() => setMenu(!menu)}
								className='bg-blue-600 text-white rounded-lg md:hidden'>
								open conversations
							</button>
							<div className='flex flex-col h-full overflow-x-auto mb-4'>
								<div className='flex flex-col h-full'>
									<div className='grid grid-cols-12 gap-y-2'>
										<div className='col-start-1 col-end-8 p-3 rounded-lg'>
											<div className='flex flex-row items-center'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
													<div>Hey How are you today?</div>
												</div>
											</div>
										</div>
										<div className='col-start-1 col-end-8 p-3 rounded-lg'>
											<div className='flex flex-row items-center'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
													<div>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Vel ipsa commodi illum saepe numquam maxime
														asperiores voluptate sit, minima perspiciatis.
													</div>
												</div>
											</div>
										</div>
										<div className='col-start-6 col-end-13 p-3 rounded-lg'>
											<div className='flex items-center justify-start flex-row-reverse'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl'>
													<div>I'm ok what about you?</div>
												</div>
											</div>
										</div>
										<div className='col-start-6 col-end-13 p-3 rounded-lg'>
											<div className='flex items-center justify-start flex-row-reverse'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl'>
													<div>
														Lorem ipsum dolor sit, amet consectetur adipisicing.
														?
													</div>
												</div>
											</div>
										</div>
										<div className='col-start-1 col-end-8 p-3 rounded-lg'>
											<div className='flex flex-row items-center'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
													<div>Lorem ipsum dolor sit amet !</div>
												</div>
											</div>
										</div>
										<div className='col-start-6 col-end-13 p-3 rounded-lg'>
											<div className='flex items-center justify-start flex-row-reverse'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl'>
													<div>
														Lorem ipsum dolor sit, amet consectetur adipisicing.
														?
													</div>
													<div className='absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500'>
														Seen
													</div>
												</div>
											</div>
										</div>
										<div className='col-start-1 col-end-8 p-3 rounded-lg'>
											<div className='flex flex-row items-center'>
												<div className='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
													A
												</div>
												<div className='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
													<div>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Perspiciatis, in.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
								<div className='flex-grow ml-4'>
									<div className='relative w-full'>
										<input
											type='text'
											className='flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10'
										/>
									</div>
								</div>
								<div className='ml-4'>
									<button className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0'>
										<span>Send</span>
										<span className='ml-2'>
											<svg
												className='w-4 h-4 transform rotate-45 -mt-px'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'></path>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}

			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white m-8 text-left shadow-xl transition-all w-full md:max-w-sm'>
									<div>
										<nav
											className='h-full overflow-y-auto'
											aria-label='Directory'>
											{Object.keys(directory).map((letter) => (
												<div key={letter} className='relative'>
													<div className='sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900'>
														<h3>{letter}</h3>
													</div>
													<ul role='list' className='divide-y divide-gray-100'>
														{directory[letter].map((person) => (
															<li
																key={person.email}
																className='hover:bg-gray-200 cursor-pointer items-center flex gap-x-4 px-3 py-5'>
																<img
																	className='h-12 w-12 flex-none rounded-full bg-gray-50'
																	src={person.imageUrl}
																	alt=''
																/>
																<div className='min-w-0'>
																	<p className='text-sm font-semibold leading-6 text-gray-900'>
																		{person.name}
																	</p>
																</div>
															</li>
														))}
													</ul>
												</div>
											))}
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Logout Modal */}

			<Transition.Root show={logout} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					initialFocus={cancelButtonRef}
					onClose={setLogout}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
									<div className='sm:flex sm:items-start'>
										<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
											<ExclamationTriangleIcon
												className='h-6 w-6 text-red-600'
												aria-hidden='true'
											/>
										</div>
										<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-base font-semibold leading-6 text-gray-900'>
												Logout
											</Dialog.Title>
											<div className='mt-2'>
												<p className='text-sm text-gray-500'>
													Are you sure you want to logout from your account?
												</p>
											</div>
										</div>
									</div>
									<div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
										<button
											type='button'
											className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
											onClick={() => router.push('/')}>
											Confirm
										</button>
										<button
											type='button'
											className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
											onClick={() => setLogout(false)}
											ref={cancelButtonRef}>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};
export default Chat;
