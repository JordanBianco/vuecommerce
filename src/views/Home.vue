<template>
	<div>
		<!-- <HeroHomepage /> -->
		<div class="md:flex md:w-11/12 md:mx-auto lg:space-x-8 px-4 md:px-0">

			<aside class="lg:w-1/4 xl:w-1/5 border-r border-gray-200 min-h-screen text-sm hidden lg:block">
				<header class="border-b border-gray-200 py-4 mb-10">
					<span class="font-thin text-base text-c-dark-gray">Filtri</span>
				</header>
				<section class="pr-4">
					<!-- Categorie -->
					<div class="mb-10">
						<h3 class="xl:text-base font-thin text-c-dark-gray mb-4">Categorie</h3>
						<div v-for="category in allCategories.data" :key="category.id" class="flex items-center space-x-2 mb-1">
							<input
								type="checkbox"
								:value="category.id"
								v-model="categories">
							<label class="text-gray-500">{{ category.name }}</label>
						</div>
					</div>
					<!-- Valutazione -->
					<div class="mb-10">
						<h3 class="xl:text-base font-thin text-c-dark-gray mb-4">Valutazione</h3>
						<section class="space-y-1.5 xl:space-y-2">
							<!-- 1 star -->
							<div @click="setRatingsFilterValue('1')" class="flex items-center justify-between">
								<div class="flex">
									<svg class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
									<svg v-for="i in 4" :key="i + '-1'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
								</div>
								<span :class="{ 'underline text-c-dark-gray' : ratings === '1' }" class="text-sm text-gray-400">1 stella</span>
							</div>
							<!-- 2 stars -->
							<div @click="setRatingsFilterValue('2')" class="flex items-center justify-between">
								<div class="flex">
									<svg v-for="i in 2" :key="i + '-2'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
									<svg v-for="i in 3" :key="i + '-3'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
								</div>
								<span :class="{ 'underline text-c-dark-gray' : ratings === '2' }" class="text-sm text-gray-400">2 stelle</span>
							</div>
							<!-- 3 stars -->
							<div @click="setRatingsFilterValue('3')" class="flex items-center justify-between">
								<div class="flex">
									<svg v-for="i in 3" :key="i + '-4'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
									<svg v-for="i in 2" :key="i + '-5'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
								</div>
								<span :class="{ 'underline text-c-dark-gray' : ratings === '3' }" class="text-sm text-gray-400">3 stelle</span>
							</div>
							<!-- 4 stars -->
							<div @click="setRatingsFilterValue('4')" class="flex items-center justify-between">
								<div class="flex">
									<svg v-for="i in 4" :key="i + '-6'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
									<svg class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
								</div>
								<span :class="{ 'underline text-c-dark-gray' : ratings === '4' }" class="text-sm text-gray-400">4 stelle</span>
							</div>
							<!-- 5 stars -->
							<div @click="setRatingsFilterValue('5')" class="flex items-center justify-between">
								<div class="flex">
									<svg v-for="i in 5" :key="i + '-7'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
								</div>
								<span :class="{ 'underline text-c-dark-gray' : ratings === '5' }" class="text-sm text-gray-400">5 stelle</span>
							</div>
						</section>
					</div>
					<!-- Fascia di Prezzo -->
					<div>
						<h3 class="xl:text-base font-thin text-c-dark-gray mb-4">Fascia di prezzo</h3>
						<div class="flex items-center space-x-2">
							<input
								@click="cleanErrors()"
								v-model="min"
								placeholder="Min"
								class="focus:outline-none bg-gray-200 text-c-dark-gray w-full rounded-lg p-2">
							<input
								@click="cleanErrors()"
								v-model="max"
								placeholder="Max"
								class="focus:outline-none bg-gray-200 text-c-dark-gray w-full rounded-lg p-2">
						</div>
						<button @click="setPrice()" class="bg-c-dark-gray text-white text-xs xl:text-sm px-4 py-2 rounded-lg mt-4 max-w-max">Set price</button>
						
						<div class="mt-4">
							<p v-if="errors.min_price" class="text-red-500 text-xs">{{ errors.min_price[0] }}</p>
							<p v-if="errors.max_price" class="text-red-500 text-xs">{{ errors.max_price[0] }}</p>
						</div>
					</div>
				</section>
			</aside>

			<div class="lg:w-3/4 xl:w-4/5 py-8 w-full">
				<div class="mb-6">
					<div class="flex items-center justify-between space-x-4">
						<!-- Search -->
						<section class="w-full">
							<div class="relative text-sm">
								<input
									v-model="search"
									placeholder="Cosa stai cercando?"
									type="text"
									class="w-full rounded-xl bg-gray-100 py-2 pl-10 placeholder-gray-400 focus:outline-none">

								<div class="absolute top-2 left-3">
									<svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
								</div>
							</div>
						</section>

						<!-- Filters Button -->
						<div @click="toggleFilters" class="bg-gray-200 rounded-full p-2 max-w-max cursor-pointer">
							<svg
								class="w-5 h-5 text-gray-700 transform rotate-90"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"/></svg>
						</div>
					</div>
					<p v-if="search" class="text-gray-400 text-sm">Search results for: <span class="text-c-dark-gray">"{{ search }}"</span></p>
				</div>

				<div
					:class="{ 'translate-y-full' : !showFilters }"
					class="w-full xs:w-4/5 md:w-80 lg:w-96 fixed transform transition duration-200 bottom-0 bg-white right-0 h-screen z-50">
						<header class="flex items-center justify-between px-4 py-5 border-b border-gray-200">
							<p class="text-gray-500">Filtra e ordina</p>
							<svg @click="toggleFilters" class="w-6 h-6 cursor-pointer text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
						</header>

						<div class="flex items-center justify-between p-4 mb-2 text-sm border-b text-gray-400">
							<p @click="clearFilters" class="cursor-pointer underline">pulisci filtri</p>
							<p v-if="products.meta">{{ products.meta.total }} articoli</p>
						</div>

						<div class="h-5/6 pb-20 overflow-y-auto text-sm">
							<!-- Fascia di prezzo -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7,6A1,1,0,1,0,8,7,1,1,0,0,0,7,6Zm14.71,5.78L12.23,2.32A1,1,0,0,0,11.5,2h-6a1,1,0,0,0-.71.29L2.29,4.78A1,1,0,0,0,2,5.49v6a1.05,1.05,0,0,0,.29.71l9.49,9.5a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l8.51-8.51a1,1,0,0,0,.29-.71A1.05,1.05,0,0,0,21.71,11.78Zm-9.22,7.81L4,11.09V5.9L5.9,4h5.18l8.5,8.49Z"/></svg>
									<h3 class="font-semibold text-c-dark-gray">Fascia di prezzo</h3>
								</header>
								<div class="flex items-center space-x-2 px-5">
									<input
										@click="cleanErrors()"
										v-model="min"
										placeholder="Min"
										class="focus:outline-none bg-gray-200 text-c-dark-gray w-1/3 rounded-lg p-2">
									<input
										@click="cleanErrors()"
										v-model="max"
										placeholder="Max"
										class="focus:outline-none bg-gray-200 text-c-dark-gray w-1/3 rounded-lg p-2">
									<button
										@click="setPrice()"
										class="bg-c-dark-gray text-white text-xs p-2.5 rounded-lg w-1/3">
											Set price
									</button>
								</div>
								
								<div class="mt-4">
									<p v-if="errors.min_price" class="text-red-500 text-xs">{{ errors.min_price[0] }}</p>
									<p v-if="errors.max_price" class="text-red-500 text-xs">{{ errors.max_price[0] }}</p>
								</div>
							</section>
							<!-- Categorie -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,11.29l-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z"/></svg>
									<h3 class="font-semibold text-c-dark-gray">Categorie</h3>
								</header>
								<div
									v-for="category in allCategories.data"
									:key="category.id"
									class="flex items-center justify-between px-5 py-2">
										<label class="text-gray-500">{{ category.name }}</label>
										<input
											type="checkbox"
											:value="category.id"
											v-model="categories">
								</div>
							</section>
							<!-- Ordina -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.29,14.29,12,18.59l-4.29-4.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0-1.42-1.42ZM7.71,9.71,12,5.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-5-5a1,1,0,0,0-1.42,0l-5,5A1,1,0,0,0,7.71,9.71Z"/></svg>
									<h3 class="text-c-dark-gray font-semibold">Ordina</h3>
								</header>
								<section>
									<label
										:class="[ sort === 'name.asc' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="name-asc">Nome dalla A alla Z
										<input
											v-model="sort"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="name.asc"
											id="name-asc">
									</label>
									<label
										:class="[ sort === 'name.desc' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="name-desc">Nome dalla Z alla A
										<input
											v-model="sort"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="name.desc"
											id="name-desc">
									</label>
									<label
										:class="[ sort === 'price.asc' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="price-asc">Prezzo dal più basso al più alto
										<input
											v-model="sort"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="price.asc"
											id="price-asc">
									</label>
									<label
										:class="[ sort === 'price.desc' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="price-desc">Prezzo dal più alto al più basso
										<input
											v-model="sort"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="price.desc"
											id="price-desc">
									</label>
									<label
										:class="[ sort === 'review.desc' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="review-desc">Il più recensito
										<input
											v-model="sort"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="review.desc"
											id="review-desc">
									</label>
								</section>
							</section>
							<!-- Taglia -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.61,7.05,17,1.39a1,1,0,0,0-.71-.29,1,1,0,0,0-.7.29L1.39,15.54a1,1,0,0,0,0,1.41l5.66,5.66a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l2.83-2.83h0l8.49-8.49h0l2.83-2.83A1,1,0,0,0,22.61,7.05ZM19.07,9.17l-.71-.71a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.71.71L16.24,12,14.12,9.88a1,1,0,0,0-1.41,1.41l2.12,2.12-1.42,1.42-.7-.71a1,1,0,1,0-1.42,1.42l.71.7-1.41,1.42L8.46,15.54a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l2.12,2.12L7.76,20.49,3.51,16.24,16.24,3.51l4.25,4.25Z"/></svg>
									<h3 class="text-c-dark-gray font-semibold">Taglia</h3>
								</header>
								<section>
									<label
										:class="[ size == 'xs' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="xs">XS - da 2 a 15cm
										<input
											v-model="size"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="xs"
											id="xs">
									</label>
									<label
										:class="[ size == 's' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="s">S - da 16 a 35cm
										<input
											v-model="size"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="s"
											id="s">
									</label>
									<label
										:class="[ size == 'm' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="m">M - da 36 a 50cm
										<input
											v-model="size"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="m"
											id="m">
									</label>
									<label
										:class="[ size == 'l' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="l">L - da 51 a 100
										<input
											v-model="size"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="l"
											id="l">
									</label>
									<label
										:class="[ size == 'xl' ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-5 py-2"
										for="xl">XL - da 101cm in su
										<input
											v-model="size"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="xl"
											id="xl">
									</label>
								</section>
							</section>
							<!-- Valutazione -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
									<h3 class="text-c-dark-gray font-semibold">Valutazione</h3>
								</header>
								<section class="px-5">
									<!-- 1 star -->
									<div @click="setRatingsFilterValue('1')" class="flex items-center justify-between py-2">
										<div class="flex">
											<svg class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
											<svg v-for="i in 4" :key="i + '-1'" class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
										</div>
										<span :class="{ 'underline text-c-dark-gray' : ratings === '1' }" class="text-gray-400">1 stella</span>
									</div>
									<!-- 2 stars -->
									<div @click="setRatingsFilterValue('2')" class="flex items-center justify-between py-2">
										<div class="flex">
											<svg v-for="i in 2" :key="i + '-2'" class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
											<svg v-for="i in 3" :key="i + '-3'" class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
										</div>
										<span :class="{ 'underline text-c-dark-gray' : ratings === '2' }" class="text-gray-400">2 stelle</span>
									</div>
									<!-- 3 stars -->
									<div @click="setRatingsFilterValue('3')" class="flex items-center justify-between py-2">
										<div class="flex">
											<svg v-for="i in 3" :key="i + '-4'" class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
											<svg v-for="i in 2" :key="i + '-5'" class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
										</div>
										<span :class="{ 'underline text-c-dark-gray' : ratings === '3' }" class="text-gray-400">3 stelle</span>
									</div>
									<!-- 4 stars -->
									<div @click="setRatingsFilterValue('4')" class="flex items-center justify-between py-2">
										<div class="flex">
											<svg v-for="i in 4" :key="i + '-6'" class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
											<svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
										</div>
										<span :class="{ 'underline text-c-dark-gray' : ratings === '4' }" class="text-gray-400">4 stelle</span>
									</div>
									<!-- 5 stars -->
									<div @click="setRatingsFilterValue('5')" class="flex items-center justify-between py-2">
										<div class="flex">
											<svg v-for="i in 5" :key="i + '-7'" class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
										</div>
										<span :class="{ 'underline text-c-dark-gray' : ratings === '5' }" class="text-gray-400">5 stelle</span>
									</div>
								</section>
							</section>
							<!-- Risultati per pagina -->
							<section class="mb-6">
								<header class="flex items-center space-x-2 p-4">
									<svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M2.5,10.56l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,0-1.73l-9-5.2a1,1,0,0,0-1,0l-9,5.2a1,1,0,0,0,0,1.73ZM12,5.65l7,4-7,4.05L5,9.69Zm8.5,7.79L12,18.35,3.5,13.44a1,1,0,0,0-1.37.36,1,1,0,0,0,.37,1.37l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.37A1,1,0,0,0,20.5,13.44Z"/></svg>
									<h3 class="text-c-dark-gray font-semibold">Risultati per pagina</h3>
								</header>
								<section>
									<label
										:class="[ perPage == 10 ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-sm text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-4 py-2"
										for="10">10 risultati
										<input
											v-model="perPage"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="10"
											id="10">
									</label>
									<label
										:class="[ perPage == 20 ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-sm text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-4 py-2"
										for="20">20 risultati
										<input
											v-model="perPage"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="20"
											id="20">
									</label>
									<label
										:class="[ perPage == 40 ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-sm text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-4 py-2"
										for="40">40 risultati
										<input
											v-model="perPage"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="40"
											id="40">
									</label>
									<label
										:class="[ perPage == 60 ? 'bg-gray-100' : ''  ]"
										class="flex items-center justify-between cursor-pointer text-sm text-gray-500 w-full hover:bg-gray-100 transition duration-200 px-4 py-2"
										for="60">60 risultati
										<input
											v-model="perPage"
											type="radio"
											class="w-4 h-4 cursor-pointer"
											value="60"
											id="60">
									</label>
								</section>
							</section>
						</div>
				</div>

				<transition name="fade">
					<div
						@click="toggleFilters()"
						v-if="showFilters"
						class="z-40 fixed inset-0 bg-black opacity-30"></div>
				</transition>

				<p class="text-gray-400 text-right text-sm mb-6" v-if="products.meta">{{ products.meta.total }} articoli</p>

				<div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-center">
					<SingleProduct
						v-for="(product, index) in products.data"
						:product="product"
						:index="index"
						:key="product.id"
						class="h-110 md:w-56 md:h-120"
					/>
				</div>

				<!-- Pagination -->
				<pagination
					class="mt-8 flex items-center space-x-4 text-base text-gray-500"
					:data="products"
					:limit="3"
					@pagination-change-page="getProducts">
						<div
							@click="scrollTop()"
							class="bg-c-green text-white text-sm p-1 px-4 rounded-lg"
							slot="prev-nav">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</div>
						<div
							@click="scrollTop()"
							class="bg-c-green text-white text-sm p-1 px-4 rounded-lg"
							slot="next-nav">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
						</div>
				</pagination>
			</div>
		</div>
	</div>
</template>

<script>
// import HeroHomepage from '@/components/Layout/HeroHomepage'
import SingleProduct from '@/components/SingleProduct'

export default {
	name: 'Home',
	components: {
		// HeroHomepage,
		SingleProduct
	},
	data() {
		return {
			sort: '',
			search: '',
			categories: [],
			min: '',
			max: '',
			size: '',
			ratings: '',
			perPage: 10,
		}
	},
	watch: {
		search() {
			this.getProducts();
		},
		categories() {
			this.getProducts();
		},
		size() {
			this.getProducts();
		},
		ratings() {
			this.getProducts();
		},
		sort() {
			this.getProducts();
		},
		perPage() {
			this.getProducts();
		},
	},
	mounted() {
		this.getProducts();
		this.getCategories();
	},
	computed: {
		showFilters() {
            return this.$store.state.product.showFilters
        },
		products() {
			return this.$store.state.product.products
		},
		errors() {
			return this.$store.state.product.errors
		},
		allCategories() {
			return this.$store.state.category.categories
		},
	},
	methods: {
		getProducts(page = 1) {
			this.$store.dispatch('product/getProducts', {
				search: this.search,
				categories: this.categories,
				min: this.min,
				max: this.max,
				size: this.size,
				sort: this.sort,
				ratings: this.ratings,
				perPage: this.perPage,
				page: page
			})
		},
		getCategories() {
			this.$store.dispatch('category/getCategories')
		},
		setPrice() {
			this.getProducts();
		},
		cleanErrors() {
			this.$store.dispatch('product/cleanErrors')
		},
		scrollTop() {
			window.scrollTo(0, 0);
		},
		toggleFilters() {
			this.$store.dispatch('product/toggleFilters')
		},
		setRatingsFilterValue(value) {
			if (this.ratings == value) {
				this.ratings = ''
			} else {
				this.ratings = value
			}
		},
		clearFilters() {
			this.categories = [];
			this.sort = '';
			this.min = '';
			this.max = '';
			this.size = '';
			this.ratings = '';
		}
	}
}
</script>
