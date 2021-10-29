<template>
	<div>
		<HeroHomepage />

		<div class="bg-gray-100 px-4 pt-8 pb-32 md:px-8">
			<div class="py-6 mb-10 text-sm flex items-center space-x-6 overflow-x-auto text-c-light-gray">
				<span class="font-semibold text-c-dark-gray border-b-2 border-c-orange py-2">Frutta</span>
				<span>Verdura</span>
				<span>Carne</span>
				<span>Pesce</span>
				<span>Formaggi</span>
				<span>Dolci</span>
				<span>Bevande</span>
			</div>

			<div class="xs:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 xs:gap-2 md:gap-4 justify-center">
				<SingleProduct
					v-for="(product, index) in products"
					:product="product"
					:index="index"
					:key="product.id"
				/>
			</div>
		</div>

		<div class="hidden md:block mt-20">
			<img src="@/assets/hero.png" alt="" class="">
		</div>
	</div>
</template>

<script>
import HeroHomepage from '@/components/Layout/HeroHomepage'
import SingleProduct from '@/components/SingleProduct'

export default {
	name: 'Home',
	components: {
		HeroHomepage,
		SingleProduct
	},
	data() {
		return {
			products: [
				{"id":2,"brand_id":2,"name":"Nike Air Jordan, Flight v. 1 (2021)","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","price":"15","image":"http://dummyimage.com/x.png/cc0000/ffffff"},
				{"id":3,"brand_id":3,"name":"Browsetype","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","price":"57","image":"http://dummyimage.com/x.png/cc0000/ffffff"},
				{"id":4,"brand_id":4,"name":"Mymm","description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","price":"119","image":"http://dummyimage.com/x.png/dddddd/000000"},
				{"id":5,"brand_id":5,"name":"Jaloo","description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","price":"63","image":"http://dummyimage.com/x.png/ff4444/ffffff"},
				{"id":6,"brand_id":6,"name":"Livefish","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","price":"47","image":"http://dummyimage.com/x.png/5fa2dd/ffffff"},
				{"id":7,"brand_id":7,"name":"Zoomzone","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","price":"15","image":"http://dummyimage.com/x.png/dddddd/000000"},
			]
		}
	},
}
</script>
