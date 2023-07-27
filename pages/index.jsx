import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	useEffect(() => {}, []);

	const auth = async (e) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setShow(true);
			setTimeout(() => {
				setShow(false);
				router.push('/chat');
			}, 2000);
		}, 2000);
		e.preventDefault();
	};

	// const auth = async (e) => {
	// 	setLoading(true);
	// 	axios
	// 		.post('http://localhost:8000/api/login/auth', {
	// 			email: login,
	// 			password: password,
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setLoading(false);
	// 			setShow(true);
	// 			setTimeout(() => {
	// 				setShow(false);
	// 			}, 2000);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// 	e.preventDefault();
	// };

	return (
		<div className='relative'>
			<div className='h-full bg-white'>
				<div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-md'>
						<img
							className='mx-auto h-20 w-auto'
							src='/logo.jpg'
							alt='Your Company'
						/>
						<h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Connecter-vous pour continuer
						</h2>
					</div>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
						<div className='bg-gray-50 px-6 py-12 shadow sm:rounded-lg sm:px-12'>
							<form onSubmit={auth} className='space-y-6'>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium leading-6 text-gray-900'>
										Identifiant
									</label>
									<div className='mt-2'>
										<input
											onChange={(e) => setLogin(e.target.value)}
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											required
											className='px-2 block w-full rounded-md border outline-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='password'
										className='block text-sm font-medium leading-6 text-gray-900'>
										Mot de passe
									</label>
									<div className='mt-2'>
										<input
											onChange={(e) => setPassword(e.target.value)}
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											className='px-2 block w-full rounded-md border outline-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
										{loading ? (
											<svg
												className='animate-spin'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												width='24'
												height='24'>
												<path
													d='M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z'
													fill='rgba(255,255,255,1)'></path>
											</svg>
										) : (
											'Connexion'
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Alert */}

			<div
				aria-live='assertive'
				className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'>
				<div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={show}
						as={Fragment}
						enter='transform ease-out duration-300 transition'
						enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
						enterTo='translate-y-0 opacity-100 sm:translate-x-0'
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-green-50 shadow-lg'>
							<div className='p-4'>
								<div className='flex items-center'>
									<div className='flex w-0 flex-1 justify-between'>
										<p className='w-0 flex-1 text-sm font-medium text-green-400'>
											Connexion réussi!
										</p>
									</div>
									<div className='ml-4 flex flex-shrink-0'>
										<button
											type='button'
											className='inline-flex rounded-md text-green-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
											onClick={() => {
												setShow(false);
											}}>
											<span className='sr-only'>Close</span>
											<XMarkIcon className='h-5 w-5' aria-hidden='true' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	);
}
