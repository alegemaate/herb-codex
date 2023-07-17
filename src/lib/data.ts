export interface Plant {
	id: string;
	classification: {
		family: string;
		subFamily?: string;
		tribe?: string;
		genus: string;
		species: string;
	};
	name: string;
	otherNames: string[];
	image: string;
	gallery: {
		src: string;
		caption: string;
	}[];
	description: string;
	mapUrl?: string;
}

export const DATA: Plant[] = [
	{
		id: 'lambs-quarters',
		classification: {
			family: 'Amaranthaceae',
			genus: 'Chenopodium',
			species: 'C. berlandieri'
		},
		name: 'Lambs Quarters',
		otherNames: ['pitseed goosefoot'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/lambs_quarters.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/lambs_quarters.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&lat=%2036.633162&sub=5294&zoom=4&map=distribution&lng=-96.064453',
		description: `Lamb's quarters, scientifically known as Chenopodium berlandieri, is a versatile and nutritious wild plant that belongs to the family Amaranthaceae. It is also commonly referred to as goosefoot, pigweed, or wild spinach. Lamb's quarters is widely distributed across North America and can be found in various habitats, including gardens, fields, roadsides, and disturbed areas.

The plant typically reaches a height of 2 to 6 feet (60 to 180 cm) and has a branching, erect stem that is often tinged with red or purple. The leaves of lamb's quarters are alternate, triangular to diamond-shaped, and have a distinct grey-green color. The leaf margins are often toothed or lobed, giving them a slightly jagged appearance. The plant derives its common name, lamb's quarters, from the similarity of the leaves to those of the herbaceous plant known as lamb's lettuce.

One notable characteristic of lamb's quarters is the white powdery coating, known as bloom or mealy texture, found on the leaves, stems, and seed heads. This coating can be rubbed off, revealing a green surface beneath. The plant produces inconspicuous, green flowers that form clusters or spikes at the tips of the branches. These flowers eventually develop into small, rounded, and green seed heads.

Lamb's quarters is renowned for its exceptional nutritional profile. The leaves are rich in vitamins A and C, calcium, iron, potassium, and dietary fiber. They also contain significant amounts of protein, often higher than many cultivated leafy greens. As a result, lamb's quarters is considered a nutritious "wild vegetable" and is often included in foraged food recipes or used as a substitute for spinach or other greens in cooking.

From an herbalist's perspective, lamb's quarters does not have a long history of specific medicinal use like some other plants. However, it is valued as a wild food source and is recognized for its potential health benefits due to its high nutrient content. The leaves can be consumed raw in salads, cooked in stir-fries or soups, or dried and used as a tea.

It is important to note that while lamb's quarters is generally regarded as safe for consumption, it is essential to correctly identify the plant and ensure it is harvested from a clean and pesticide-free area. Additionally, individuals with known allergies to plants in the Amaranthaceae family, such as spinach or beets, should exercise caution when consuming lamb's quarters.

In summary, lamb's quarters (Chenopodium berlandieri) is a versatile and nutritious wild plant that is widely distributed in North America. It has triangular to diamond-shaped leaves, a white powdery coating, and inconspicuous green flowers. Lamb's quarters is appreciated as a wild edible due to its high nutritional content and can be used in various culinary preparations. While not traditionally used for specific medicinal purposes, its nutrient-rich profile contributes to its potential health benefits. As always, proper identification and caution should be exercised when foraging and consuming wild plants.`
	},
	{
		id: 'ground-ivy',
		classification: {
			family: 'Lamiaceae',
			genus: 'Glechoma',
			species: 'G. hederacea'
		},
		name: 'Ground Ivy',
		otherNames: [
			'creeping charlie',
			'gill-over-the-ground',
			'alehoof',
			'tunhoof',
			'catsfoot',
			'field balm'
		],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/ground-ivy.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/ground-ivy.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/ground-ivy-2.webP',
				caption: 'Test 2'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/ground-ivy-3.webP',
				caption: 'Test 3'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lat=%2036.633162&sub=3026&lng=-96.064453&subjectnumber=&map=distribution',
		description: `Ground ivy, scientifically known as Glechoma hederacea, is a creeping perennial herbaceous plant that belongs to the mint family, Lamiaceae. It is also commonly referred to as creeping Charlie, cat's foot, alehoof, or gill-over-the-ground. With its low-growing and mat-forming habit, ground ivy often spreads rapidly and covers large areas of the ground.

The plant typically has square stems, a characteristic feature of the mint family, and grows close to the ground, rarely exceeding a height of 6 to 12 inches (15 to 30 cm). The leaves of ground ivy are round or kidney-shaped, with scalloped edges and a deep green color. They are arranged opposite each other along the stems and emit a mild, pleasant fragrance when crushed.

During spring and early summer, ground ivy produces small, funnel-shaped flowers that are bluish-purple or violet in color. These flowers grow in clusters in the leaf axils and give the plant a charming appearance. The flowers are attractive to bees and other pollinators, making ground ivy a valuable source of nectar in the garden.

Ground ivy is native to Europe and Asia but has naturalized in many parts of North America. It thrives in a variety of conditions, including shady areas, moist soils, and disturbed habitats such as lawns, gardens, and woodland edges. It has a vigorous growth habit and can quickly become invasive if not managed properly.

From an herbalist's perspective, ground ivy has a long history of medicinal use. It contains various chemical constituents, including volatile oils, tannins, flavonoids, and bitter principles, which contribute to its therapeutic properties. Traditionally, ground ivy has been employed as a herbal remedy for respiratory ailments, including coughs, colds, bronchitis, and sinusitis. It is believed to have expectorant, antitussive (cough-suppressing), and anti-inflammatory effects.

Furthermore, ground ivy has been used topically as a poultice or ointment for skin conditions such as wounds, cuts, and insect bites. Its astringent and antimicrobial properties are thought to promote wound healing and help alleviate skin irritations.

As with any herbal remedy, it is important to exercise caution and consult with a knowledgeable practitioner before using ground ivy for medicinal purposes. While it has a history of traditional use, scientific research on its effectiveness and safety is limited. Additionally, individuals with known allergies or sensitivities to plants in the mint family should avoid using ground ivy.

In summary, ground ivy (Glechoma hederacea) is a low-growing perennial herb with square stems, round or kidney-shaped leaves, and bluish-purple flowers. It is valued for its medicinal properties and has historically been used for respiratory issues and topical applications. However, it is important to gather reliable information and seek professional advice before utilizing ground ivy for its potential health benefits.`
	},
	{
		id: 'bird-vetch',
		classification: {
			family: 'Fabaceae',
			subFamily: 'Fabeae',
			tribe: 'Vicieae',
			genus: 'Vicia',
			species: 'V. cracca'
		},
		name: 'Bird Vetch',
		otherNames: ['Tufted Vetch', 'Cow Vetch', 'Blue Vetch', 'Boreal Vetch'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/bird_vetch.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/bird_vetch_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/bird_vetch_3.webP',
				caption: 'Test 2'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/bird_vetch_4.webP',
				caption: 'Test 3'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&lat=%2036.633162&zoom=4&lng=-96.064453&subjectnumber=&sub=13109',
		description: `Bird vetch, scientifically known as Vicia cracca, is a flowering perennial plant that belongs to the Fabaceae family, which is the pea family. It is also commonly referred to as tufted vetch or cow vetch. Bird vetch is native to Europe and Asia but has naturalized in many other parts of the world, including North America.

The plant typically grows upright, reaching heights of 2 to 4 feet (60 to 120 cm). It has a slender, climbing or sprawling habit, with long, twining stems that help it attach to and climb on surrounding vegetation or structures. The leaves of bird vetch are pinnately compound, consisting of multiple pairs of small, lance-shaped leaflets. The leaflets are arranged oppositely along the stem and give the plant a delicate and fern-like appearance.

Bird vetch produces attractive clusters of pea-like flowers, which are usually violet-blue in color, but can also be pink, white, or pale purple. The flowers emerge from the leaf axils and bloom from late spring through summer. They are visited by various pollinators, including bees and butterflies, contributing to their role in supporting local ecosystems.

Following flowering, bird vetch forms elongated, flattened seed pods that contain several seeds. These seed pods mature and turn brown as they dry, eventually splitting open to release the seeds. The seeds have a unique shape, resembling small, mottled pebbles.

While bird vetch is primarily considered a wild plant and not extensively utilized for medicinal or culinary purposes, it does have some historical uses and associations. In traditional herbalism, the aerial parts of the plant were occasionally used in decoctions or infusions as a diuretic and for respiratory conditions, such as coughs and bronchitis. However, it is important to note that scientific research on its medicinal properties is limited, and it is always recommended to consult a knowledgeable practitioner before using any plant for medicinal purposes.

From an ecological perspective, bird vetch can be both beneficial and problematic. As a legume, it has the ability to fix nitrogen in the soil, contributing to soil fertility. It also serves as a valuable source of forage for certain wildlife species, including birds and rabbits. However, bird vetch can also exhibit invasive tendencies in some regions, spreading rapidly and outcompeting native plant species. Therefore, it is crucial to consider its potential impact on local ecosystems before introducing it into new areas.

In summary, bird vetch (Vicia cracca) is a flowering perennial plant with climbing or sprawling stems, pinnately compound leaves, and clusters of violet-blue pea-like flowers. While not extensively used for medicinal or culinary purposes, it has historical associations with diuretic and respiratory properties. Bird vetch can provide ecological benefits but may also exhibit invasive tendencies in certain regions. As with any wild plant, it is important to be mindful of its potential impact and consult reliable resources or experts when considering its use or introduction.`
	},
	{
		id: 'black-medic',
		classification: {
			family: 'Fabaceae',
			subFamily: 'Faboideae',
			genus: 'Medicago',
			species: 'M. lupulina'
		},
		name: 'Black Medic',
		otherNames: ['Black Medick', 'Hop Clover', 'Yellow Trefoil'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/black_medic.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/black_medic.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&sub=6005&lng=-96.064453&zoom=4&map=distribution&lat=%2036.633162',
		description: `Black medic, scientifically known as Medicago lupulina, is a flowering annual plant that belongs to the Fabaceae family, which is the pea family. It is also commonly referred to as hop clover or black medick. Black medic is native to Europe and Asia but has naturalized in various parts of North America and other regions around the world.

The plant typically grows low to the ground, reaching heights of 6 to 18 inches (15 to 45 cm). It has a spreading habit, with branching stems that often form dense mats or patches. The leaves of black medic are composed of three leaflets, arranged alternately along the stems. The leaflets are oval-shaped with toothed margins, giving them a distinctive appearance. The leaves are typically bright green in color and have a soft texture.

Black medic produces small, yellow flowers that are clustered together in tight, spherical heads. These flower heads resemble small, clover-like structures and are borne on elongated stalks. The flowers bloom from late spring through summer, attracting various pollinators like bees and butterflies.

After flowering, black medic forms small, round seed pods that contain seeds. The seed pods initially appear green but eventually turn black as they mature and dry out. These seed pods resemble tiny, flattened spheres and can often be found within the dense foliage of the plant.

While black medic is primarily considered a weed and is not commonly utilized for medicinal or culinary purposes, it does have some historical associations and uses. In traditional herbalism, the aerial parts of the plant were occasionally used in decoctions or infusions as a diuretic and for urinary tract conditions. The plant has also been used as fodder for livestock due to its high nutritional value.

From an ecological perspective, black medic can play a beneficial role in the ecosystem. Like other legumes, it has the ability to fix nitrogen from the atmosphere into the soil, contributing to soil fertility. It can also provide a source of forage for certain wildlife species.

However, black medic is often considered a weed in lawns, gardens, and agricultural fields. Its ability to spread rapidly and form dense mats can be problematic, particularly in areas where it competes with desired plants for resources. It is important to implement appropriate management strategies if black medic becomes invasive in a particular area.

In summary, black medic (Medicago lupulina) is a low-growing annual plant with spreading stems, three-leaflet leaves, and small, yellow flower clusters. While not extensively used for medicinal or culinary purposes, it has historical associations with diuretic properties. Black medic can provide ecological benefits but can also become invasive in certain contexts. As with any wild plant, it is important to understand its characteristics and potential impact before managing or utilizing it.`
	},
	{
		id: 'burdock',
		classification: {
			family: 'Asteraceae',
			genus: 'Arctium',
			species: 'A. lappa'
		},
		name: 'Burdock',
		otherNames: ['Beggar’s Buttons', 'Lappa', 'Thorny Burr'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/burdock.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/burdock.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/burdock_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/burdock_3.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lng=-96.064453&lat=%2036.633162&subjectnumber=&sub=27053&map=distribution',
		description: `Arctium lappa, commonly known as burdock, is a biennial herbaceous plant that belongs to the Asteraceae family. It is native to Europe and has naturalized in various regions around the world. Burdock is well-known for its distinctive appearance and has been used for both culinary and medicinal purposes.

Burdock is a robust plant that can grow up to 6 feet (2 meters) in height. It has large, heart-shaped leaves that are rough to the touch and can measure up to 2 feet (60 centimeters) in length. The plant produces tall, sturdy stems with multiple branches. Burdock blooms in the second year, producing clusters of small, purple or pink flowers that develop into burr-like seed heads. These seed heads have hooked bristles that easily attach to clothing or animal fur, aiding in seed dispersal.

As an herbalist, burdock is highly regarded for its potential medicinal properties. The roots, leaves, and seeds of burdock contain various bioactive compounds, including inulin, mucilage, flavonoids, and lignans, which contribute to its therapeutic effects.

Burdock root has been traditionally used to support healthy liver function and promote detoxification. It is believed to have hepatoprotective properties and may help stimulate the production and flow of bile, supporting the body's natural detoxification processes.

Furthermore, burdock is known for its potential benefits for the skin. The root has been used as a traditional remedy for skin conditions, such as acne, eczema, and psoriasis. Burdock root extracts are believed to have anti-inflammatory and antioxidant effects, which may help soothe skin irritations and promote a healthy complexion.

Burdock root is also valued for its diuretic properties. It has been used to support kidney health and promote urine flow, aiding in the elimination of toxins and excess fluids from the body. This diuretic action, along with its potential anti-inflammatory effects, may be beneficial for conditions such as urinary tract infections and edema.

In culinary practices, burdock is often used as a vegetable. The young leaves and stems can be cooked and eaten like greens, while the root is commonly used in stir-fries, soups, and herbal teas. The root has a mild, earthy flavor and a crunchy texture when cooked.

It is important to note that while burdock is generally considered safe for most individuals when used appropriately, some people may experience allergic reactions to the plant. As with any herbal remedy or wild plant, it is recommended to exercise caution, properly identify burdock, and consult with a qualified healthcare practitioner or herbalist before using it, especially if you have any known allergies or are taking medications.

In summary, burdock (Arctium lappa) is a biennial herbaceous plant known for its potential medicinal and culinary uses. The root of burdock is valued for its support of liver health, promotion of healthy skin, and diuretic properties. Burdock root can be incorporated into culinary preparations, and the young leaves and stems can be consumed as a vegetable. As always, seeking professional advice and using caution when using wild plants is advisable.`
	},
	{
		id: 'shepherds-purse',
		classification: {
			family: 'Brassicaceae',
			genus: 'Capsella',
			species: 'C. bursa-pastoris'
		},
		name: "Shepherd's Purse",
		otherNames: [],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/shepherds_purse.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/shepherds_purse.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/shepherds_purse_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/shepherds_purse_3.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&sub=5222&subjectnumber=&lat=%2036.633162&lng=-96.064453&zoom=4',
		description: `Shepherd's purse, scientifically known as Capsella bursa-pastoris, is a small annual plant that belongs to the Brassicaceae family, which is the mustard family. It is also commonly referred to as lady's purse, mother's heart, or pickpocket. Shepherd's purse is native to Europe and has naturalized in many other parts of the world, including North America.

The plant typically grows in low, compact rosettes with deeply lobed, toothed leaves. The leaves of shepherd's purse are somewhat reminiscent of a purse or heart shape, which contributes to its common names. The leaves are generally hairless and have a slightly wavy or serrated edge. They grow in a basal rosette, meaning they emerge from a central point near the ground.

Shepherd's purse produces slender, upright stems that bear small clusters of white flowers. The flowers have four petals and are arranged in a raceme, a long cluster with individual flowers attached by short stalks along a central stem. The flowers bloom from spring through summer, and after pollination, they develop into seed pods that resemble small, triangular purses or pouches. These seed pods contain numerous tiny, round seeds that can be released by shaking or rubbing the dried pods.

From an herbalist's perspective, shepherd's purse has a long history of traditional use in various cultures. The aerial parts of the plant, including the leaves and flowering tops, are utilized for their medicinal properties. Shepherd's purse is known for its astringent and hemostatic qualities, which means it has the ability to tighten and constrict tissues and help control bleeding.

In herbal medicine, shepherd's purse has been used as a styptic, applied topically to wounds and cuts to help promote blood clotting and staunch bleeding. It has also been used internally as a tea or tincture for its potential benefits in managing menstrual irregularities, including heavy or prolonged menstrual bleeding.

Furthermore, shepherd's purse has been employed as a traditional diuretic and a mild digestive aid. It contains various constituents, including flavonoids, tannins, alkaloids, and essential oils, which contribute to its potential therapeutic effects.

It is important to note that while shepherd's purse has a history of traditional use, scientific research on its effectiveness and safety is limited. As with any herbal remedy, it is advisable to consult with a knowledgeable practitioner before using shepherd's purse for medicinal purposes, especially if you have any underlying health conditions or are taking other medications.

In summary, shepherd's purse (Capsella bursa-pastoris) is a small annual plant with deeply lobed leaves and white flowers arranged in clusters. It has a history of traditional use in herbal medicine, particularly for its astringent and hemostatic properties. Shepherd's purse has been utilized for wound healing, managing menstrual irregularities, and as a diuretic. However, it is recommended to seek professional advice and exercise caution when using any herbal remedy.`
	},
	{
		id: 'catnip',
		classification: {
			family: 'Lamiaceae',
			genus: 'Nepeta',
			species: 'N. cataria'
		},
		name: 'Catnip',
		otherNames: ['Catmint', 'Catswort', 'Catwort', 'Field Balm'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/catnip.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/catnip.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/catnip_2.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&sub=6078&zoom=4&lat=%2036.633162&lng=-96.064453&subjectnumber=',
		description: `Catnip, scientifically known as Nepeta cataria, is a perennial herbaceous plant that belongs to the Lamiaceae family, which is the mint family. Catnip is renowned for its unique effects on cats, but it also possesses several properties that make it valuable in herbal medicine and other applications.

Catnip typically grows up to 3 feet (90 centimeters) in height and has square stems, a characteristic feature of the mint family. The plant produces opposite, heart-shaped leaves with serrated edges. The leaves are covered in fine hairs and have a gray-green color. When crushed, the leaves emit a strong, aromatic fragrance that is attractive to cats and often has a minty or lemony scent to humans.

During the summer months, catnip produces clusters of small, tubular flowers that are white with hints of lavender or pale pink. These flowers are arranged in spikes at the tops of the stems and attract various pollinators, including bees and butterflies.

From a medicinal perspective, catnip has a long history of use in traditional herbal medicine. The leaves and flowering tops of catnip are primarily utilized for their therapeutic properties. Catnip contains several active compounds, including nepetalactone, which is responsible for its effects on cats. Nepetalactone acts as a natural insect repellent and is also known to have sedative properties.

In herbal medicine, catnip is commonly used as a mild relaxant and nervine. It has a calming effect on the nervous system and is often employed to promote relaxation, relieve anxiety, and support restful sleep. Catnip is typically consumed as an infusion or tea, but it can also be used in tinctures or added to bathwater for a soothing soak.

Beyond its medicinal applications, catnip has various practical uses. It can be cultivated in gardens as an ornamental plant due to its attractive foliage and flowers. Additionally, dried catnip leaves are often used to make toys for cats, which can provide them with entertainment and stimulation.

It's worth noting that while catnip is generally safe for cats and humans, individual sensitivities and allergies can occur. Additionally, the effects of catnip on cats can vary, and not all cats respond to it in the same way.
		
In summary, catnip (Nepeta cataria) is a perennial herb with square stems, heart-shaped leaves, and clusters of tubular flowers. It is renowned for its effects on cats but also possesses medicinal properties as a relaxant and nervine. Catnip is used to promote relaxation, relieve anxiety, and support sleep. It is also employed in gardening and can be used to make toys for cats. As with any herbal remedy, it's important to consider individual sensitivities and consult with a knowledgeable practitioner when incorporating catnip into your health routine.`
	},
	{
		id: 'clover',
		classification: {
			family: 'Fabaceae',
			genus: 'Trifolium',
			species: 'T. repens'
		},
		name: 'Clover',
		otherNames: [],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/clover.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/clover.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/clover_close.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/clover_white.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/clover_white_2.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lng=-96.064453&zoom=4&lat=%2036.633162&sub=6557&map=distribution&subjectnumber=',
		description: `Clover, scientifically known as Trifolium repens, is a perennial flowering plant that belongs to the Fabaceae family, which is the pea family. It is a widely recognized and abundant wild plant found in various regions around the world. Clover is known for its trifoliate leaves, meaning each leaf is divided into three leaflets.

The plant typically forms low-growing, spreading clumps with creeping stems that root at the nodes. The leaves of clover are alternate and arranged on long petioles. Each leaf consists of three leaflets, each of which is usually oval or heart-shaped, with a characteristic v-shaped white or pale mark on the upper surface. The leaflets can vary in size and have serrated edges.

Clover produces round flower heads composed of numerous small, tubular-shaped flowers. The flowers are typically white or pink, although other colors like red or purple can also occur. They are arranged in dense clusters at the tips of long stalks and bloom during the spring and summer months. These flower heads are attractive to various pollinators, such as bees and butterflies, contributing to their role in supporting local ecosystems.

One notable characteristic of clover is its ability to fix nitrogen in the soil. Like other legumes, clover forms a symbiotic relationship with nitrogen-fixing bacteria in its root nodules, allowing it to convert atmospheric nitrogen into a form usable by plants. This ability makes clover beneficial in improving soil fertility and supporting the growth of other plants in its vicinity.

From an herbalist's perspective, clover is valued for both its traditional and modern-day applications. The aerial parts of the plant, including the leaves and flowers, are utilized in herbal preparations. Clover is known for its high content of various phytochemicals, including flavonoids, phenolic compounds, and triterpenoids, which contribute to its potential health benefits.

Clover has been used traditionally as a mild diuretic, as well as for its potential antimicrobial and anti-inflammatory properties. It has also been employed to support cardiovascular health and as a general tonic. Additionally, clover is often included in herbal blends or used as a tea ingredient for its pleasant taste and aroma.

It is important to note that while clover is generally safe for consumption, some individuals may have allergies to certain species of clover or may experience digestive discomfort if consumed in large quantities. Additionally, it is crucial to correctly identify the species of clover being used, as some species can have toxic or undesirable effects.

In summary, clover (Trifolium repens) is a perennial plant with trifoliate leaves and round flower heads. It is recognized for its ability to fix nitrogen in the soil and its potential health benefits. Clover has traditional uses as a diuretic and for cardiovascular support. It is important to exercise caution, consider individual sensitivities, and ensure proper identification when using clover for medicinal or culinary purposes.`
	},
	{
		id: 'dandelion',
		classification: {
			family: 'Asteraceae',
			genus: 'Taraxacum',
			species: 'T. officinale'
		},
		name: 'Dandelion',
		otherNames: [
			'Blowball',
			'Cankerwort',
			'Lion’s Tooth',
			'Piss-a-bed',
			'Priest’s Crown',
			'Puffball',
			'Swine Snout',
			'White Endive',
			'Wild Endive'
		],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/dandillion.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dandillion.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dandillion_2.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&lng=-96.064453&sub=3887&lat=%2036.633162&subjectnumber=&map=distribution',
		description: `Dandelion, scientifically known as Taraxacum officinale, is a perennial herbaceous plant that belongs to the Asteraceae family, which is the daisy family. It is a well-known and widespread wild plant found in many regions around the world. Dandelion is recognized for its distinctive yellow flowers that turn into white, fluffy seed heads commonly referred to as "blowballs" or "dandelion clocks."

The plant typically grows low to the ground, with a rosette of deeply toothed leaves that radiate from a central taproot. The leaves of dandelion are long and narrow, with deep lobes that resemble the teeth of a lion, giving rise to its common name. The leaves are hairless and have a dark green color.

Dandelion produces solitary, bright yellow flowers on hollow stalks. Each flower consists of multiple ray florets that surround a central cluster of tiny disc florets. The flowers bloom in early spring and continue through summer, attracting various pollinators, such as bees and butterflies.

After flowering, the dandelion flowers transform into spherical seed heads composed of many feathery pappus hairs. These hairs enable the seeds to be dispersed by wind, leading to the characteristic sight of dandelion seeds floating through the air.

From an herbalist's perspective, dandelion is highly regarded for its medicinal and nutritional properties. The entire plant, including the leaves, flowers, and roots, is utilized for different purposes. Dandelion is rich in vitamins, minerals, and antioxidants, making it a valuable addition to a healthy diet.

The leaves of dandelion are edible and have a slightly bitter taste. They can be consumed raw in salads or cooked as a green vegetable. Dandelion leaves are particularly known for their diuretic properties, which means they can promote increased urine production and help support kidney and liver function.

The roots of dandelion are often used in herbal preparations. They can be dried and roasted to make a caffeine-free coffee substitute, known as dandelion coffee. Dandelion root is also utilized for its potential liver-stimulating and digestive properties. It is commonly included in herbal blends aimed at supporting liver health and promoting detoxification.

In traditional herbal medicine, dandelion has been used to support various aspects of health, including digestion, urinary system function, and skin health. It is believed to have mild laxative effects and may assist in relieving bloating and indigestion.

It is worth noting that while dandelion is generally safe for consumption, individuals with specific medical conditions or those taking certain medications should exercise caution and consult with a healthcare professional before incorporating dandelion into their health routine.

In summary, dandelion (Taraxacum officinale) is a perennial herbaceous plant with deeply toothed leaves and yellow flowers that transform into fluffy white seed heads. It is valued for its medicinal and nutritional properties, with the leaves and roots utilized in herbal preparations. Dandelion is known for its diuretic, liver-stimulating, and digestive properties. As with any herbal remedy or wild plant, it is essential to consider individual sensitivities and seek professional advice when using`
	},
	{
		id: 'dock',
		classification: {
			family: 'Polygonaceae',
			genus: 'Rumex',
			species: 'R. crispus'
		},
		name: 'Dock',
		otherNames: ['Curly Dock', 'Yellow Dock'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock_4.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock_5.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dock_red.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&map=distribution&lat=%2036.633162&lng=-96.064453&zoom=4&subjectnumber=&sub=6335',
		description: `Dock, scientifically known as Rumex crispus, is a perennial herbaceous plant that belongs to the Polygonaceae family. It is a common and widespread wild plant found in many regions around the world. Dock is recognized for its tall stature, lance-shaped leaves, and long, slender flower spikes.

The plant typically grows upright, reaching heights of 2 to 4 feet (60 to 120 centimeters). Dock has a deep taproot that allows it to withstand drought conditions and grow in various soil types. The leaves of dock are elongated, narrow, and have distinctive wavy or curly edges, giving rise to its specific epithet "crispus," meaning curled.

Dock produces tall, erect flower spikes that bear numerous small, greenish-brown flowers. The flowers are arranged in dense clusters along the spikes and bloom during the summer months. After flowering, the plant develops small, triangular fruits that contain the seeds, which are often referred to as "docks" or "seeds."

From an herbalist's perspective, dock has a history of traditional use as a medicinal plant. The roots, leaves, and seeds of dock are utilized for various purposes. Dock contains several bioactive compounds, including anthraquinones, tannins, flavonoids, and polysaccharides, which contribute to its potential health benefits.

The root of dock is often used in herbal preparations. It is harvested in the autumn or early spring when the plant's energy is concentrated in the root. Dock root has traditionally been employed as a bitter digestive tonic and a mild laxative. It is believed to stimulate bile production, support liver function, and aid in the elimination of waste from the body.

The leaves of dock are also utilized in herbal preparations, although they are generally harvested when young and tender. Dock leaves have a slightly sour or tart taste and are often used as a culinary ingredient, especially in salads, soups, or stir-fries. They are known for their high content of vitamins A and C, as well as minerals like iron and calcium.

Dock leaves and roots have been traditionally used topically in the form of poultices or salves to support the healing of minor skin irritations, such as insect bites, rashes, or minor burns. The astringent properties of dock can help soothe inflammation and promote wound healing.

It is important to note that while dock has a history of traditional use, scientific research on its effectiveness and safety is limited. Furthermore, dock should not be confused with other plants that share the common name "dock," as they may have different properties and uses.

As with any herbal remedy, it is advisable to consult with a knowledgeable practitioner before using dock for medicinal purposes, especially if you have any underlying health conditions or are taking other medications.

In summary, dock (Rumex crispus) is a perennial herbaceous plant with lance-shaped leaves and tall flower spikes. It has a history of traditional use in herbal medicine, particularly for its potential digestive and topical benefits. Dock root is employed as a bitter digestive tonic, while dock leaves can be consumed as a culinary ingredient and used topically to support skin health. As with any herbal remedy, it is important to exercise caution, seek professional advice, and ensure correct identification when using dock for medicinal or culinary purposes.`
	},
	{
		id: 'dogwood',
		classification: {
			family: 'Cornaceae',
			genus: 'Cornus',
			species: 'C. florida'
		},
		name: 'Dogwood',
		otherNames: [],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/dogwood.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dogwood.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/dogwood_2.webP',
				caption: 'Test'
			}
		],
		description: `Dogwood, scientifically known as Cornus florida, is a deciduous tree that belongs to the Cornaceae family. It is a native tree to eastern and central parts of North America and is well-known for its beautiful springtime blossoms and vibrant fall foliage. Dogwood is valued for its ornamental qualities, ecological importance, and potential medicinal uses.

Dogwood trees typically reach heights of 20 to 40 feet (6 to 12 meters) and have a spreading crown with a rounded or flat-topped shape. The bark of mature trees is grayish-brown and develops distinctive ridges and furrows. The leaves are opposite, simple, and oval-shaped, with prominent veins. They turn various shades of red, orange, or purple in the autumn, adding to the tree's visual appeal.

One of the most striking features of dogwood is its flowers, which bloom in early spring before the leaves fully emerge. The flowers are small and clustered together in groups called inflorescences. Each inflorescence consists of four large, petal-like bracts that are typically white but can also be pink or red. The actual flowers are small and yellowish, nestled in the center of the bracts.

After the flowers, dogwood produces small, round, and fleshy fruit known as drupes. These fruit clusters are initially green but turn bright red as they mature. While they are edible, they are not typically consumed by humans due to their bitter taste and high seed content. However, they serve as a valuable food source for birds and wildlife.

In addition to its ornamental value, dogwood has a history of traditional medicinal uses among Native American tribes. Various parts of the tree, including the bark, leaves, and roots, have been used for their potential health benefits. Dogwood is believed to possess astringent, antipyretic, and analgesic properties.

The inner bark of dogwood was traditionally used to make infusions or poultices for treating fevers, diarrhea, and respiratory conditions. The bark was also used externally to alleviate pain and inflammation, particularly in the form of a wash or salve. Additionally, dogwood leaves have been used to make teas and tonics for their astringent properties.

While dogwood has a history of traditional use, scientific research on its medicinal properties is limited. As with any herbal remedy, it is important to consult with a knowledgeable practitioner or healthcare professional before using dogwood for medicinal purposes.

In summary, dogwood (Cornus florida) is a deciduous tree known for its showy spring flowers, attractive autumn foliage, and small fruit. It has both ornamental and potential medicinal value. Dogwood bark, leaves, and roots have been traditionally used for their potential astringent, antipyretic, and analgesic properties. As with any herbal remedy, it is important to seek professional advice and ensure proper identification before using dogwood for medicinal purposes.`
	},
	{
		id: 'false-dandelion',
		classification: {
			family: 'Asteraceae',
			genus: 'Hypochaeris',
			species: 'H. radicata'
		},
		name: 'False Dandelion',
		otherNames: ['Flatweed', 'Catsear', 'Hawkweed'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/false_dandelion.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/false_dandelion.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/false_dandelion_2.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=5740&lng=-96.064453&lat=%2036.633162&map=distribution&subjectnumber=&zoom=4',
		description: `False dandelion, scientifically known as Hypochaeris radicata, is a perennial herbaceous plant that belongs to the Asteraceae family, similar to the common dandelion (Taraxacum officinale). It is often referred to as false dandelion because of its resemblance to the true dandelion in appearance, particularly its yellow flowers and dandelion-like seed heads.

False dandelion typically grows in open fields, lawns, and disturbed areas, and it is native to Europe but has been naturalized in various regions around the world. The plant forms a rosette of basal leaves with a deep taproot. The leaves are lance-shaped, toothed, and often covered with fine hairs. The plant produces a tall, leafless stalk topped with a single yellow flower head.

The flower head of false dandelion consists of numerous small, yellow ray florets that surround a central cluster of disc florets. The flower head resembles that of a true dandelion, with the ray florets forming the "petals" and the disc florets forming the central "disk." After flowering, false dandelion develops seed heads similar to dandelions, with fluffy, white pappus hairs that facilitate wind dispersal of the seeds.

While false dandelion shares some similarities with true dandelion, there are notable differences between the two plants. False dandelion has narrower leaves with more pronounced teeth, and its flower stalk is taller and lacks the branching structure found in true dandelions. Additionally, the seeds of false dandelion have a shorter pappus and are less effective in long-distance dispersal compared to true dandelion seeds.

From an herbalist's perspective, false dandelion is not as commonly used as true dandelion in herbal preparations and traditional remedies. However, like true dandelion, false dandelion is classified as a bitter herb and is believed to possess similar digestive and diuretic properties.

The leaves of false dandelion can be used similarly to true dandelion leaves. They can be harvested and consumed raw in salads or cooked as a green vegetable. Like true dandelion leaves, false dandelion leaves are believed to stimulate digestion and support liver function.

It is important to note that false dandelion may not be as extensively studied or recognized for its medicinal properties as true dandelion. As with any wild plant or herbal remedy, it is crucial to exercise caution, properly identify the plant, and consult with a knowledgeable practitioner or healthcare professional before using false dandelion for medicinal purposes.

In summary, false dandelion (Hypochaeris radicata) is a perennial herbaceous plant that resembles the true dandelion but has some distinct differences in leaf shape, flower stalk, and seed head structure. False dandelion is believed to possess similar bitter and digestive properties to true dandelion, although it is not as commonly used in herbal preparations. As with any herbal remedy, it is important to seek professional advice and ensure correct identification when using false dandelion for medicinal or culinary purposes.`
	},
	{
		id: 'field-penny-cress',
		classification: {
			family: 'Brassicaceae',
			genus: 'Thlaspi',
			species: 'T. arvense'
		},
		name: 'Field Pennycress',
		otherNames: ['Frenchweed', 'Stinkweed'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/field_penny_cress.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/field_penny_cress.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=6524&lng=-96.064453&lat=%2036.633162&zoom=4&map=distribution&subjectnumber=',
		description: `Thlaspi arvense, commonly known as Field Pennycress, is an annual flowering plant that belongs to the Brassicaceae family. It is native to Eurasia but has naturalized in many parts of North America. Field Pennycress is often considered a weed and can be found in fields, disturbed areas, and along roadsides.

Field Pennycress is a small plant that typically grows to a height of 1 to 2 feet (30 to 60 centimeters). It has smooth, branching stems with alternate, lance-shaped leaves that are toothed or lobed. The plant produces clusters of small, four-petaled white flowers that develop into flattened, disc-shaped seed pods. These seed pods are coin-shaped and have a distinct penny-like appearance, hence the common name "Pennycress."

As an herbalist, Field Pennycress is not commonly used for culinary or medicinal purposes. However, it has some potential ecological and agricultural benefits. The plant has been studied for its ability to accumulate heavy metals from contaminated soils, making it a candidate for phytoremediation, a process where plants are used to clean up contaminated environments.

In agriculture, Field Pennycress is being explored as a cover crop, particularly in winter. It is known for its ability to grow rapidly and cover the soil, which helps to prevent erosion and improve soil health. Additionally, Field Pennycress produces oil-rich seeds that contain omega-3 fatty acids, which may have potential applications in biodiesel production and as a feedstock for livestock.

While Field Pennycress is generally considered safe, it is not widely used in herbal medicine or culinary practices. It is important to exercise caution when using wild plants and to consult with a knowledgeable herbalist or professional before attempting to use them for any specific purpose.

In summary, Field Pennycress (Thlaspi arvense) is an annual flowering plant that is often considered a weed. It has lance-shaped leaves, small white flowers, and distinctive coin-shaped seed pods. While it is not commonly used for culinary or medicinal purposes, Field Pennycress has potential ecological and agricultural benefits such as phytoremediation and as a cover crop. As always, it is advisable to seek professional advice and exercise caution when using wild plants for any purpose.`
	},
	{
		id: 'fleabane',
		classification: {
			family: 'Asteraceae',
			genus: 'Erigeron',
			species: 'E. annuus'
		},
		name: 'Fleabane',
		otherNames: ['Daisy Fleabane', 'Eastern Daisy Fleabane', 'Philadelphia Fleabane'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane_4.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/fleabane_5.webP',
				caption: 'Test'
			}
		],
		description: `Fleabane, scientifically known as Erigeron annuus, is a flowering plant that belongs to the Asteraceae family. It is native to North America and can be found in various regions across the continent. Fleabane is a common wild plant that often grows in open fields, meadows, roadsides, and disturbed areas.

Fleabane is an annual or biennial herb that typically reaches heights between 1 and 3 feet (30 to 90 centimeters). It has an erect stem with branches that bear numerous small flowers. The leaves are lance-shaped or oblong, and they are covered in fine hairs, giving them a somewhat fuzzy or hairy appearance.

The flowers of fleabane are daisy-like, with a yellow center composed of numerous tiny disc florets surrounded by several narrow ray florets. The ray florets are usually white, but they can sometimes have a pale pink or lavender hue. The flowers bloom from late spring to early fall, attracting pollinators like bees and butterflies.

As an herbalist, fleabane is not commonly used for medicinal purposes compared to some other wild plants. However, it does have a history of traditional use among certain indigenous tribes. The plant is said to have potential astringent and diuretic properties.

In traditional herbal medicine, fleabane has been used to address various health concerns. It has been employed as a topical remedy for skin conditions, such as rashes, sores, and wounds. The astringent properties of fleabane may help to tighten and soothe the skin.

It is important to note that scientific research on the medicinal properties of fleabane is limited, and it is always advisable to consult with a qualified healthcare practitioner or herbalist before using any plant for medicinal purposes.

In summary, fleabane (Erigeron annuus) is a wild plant with daisy-like flowers that can be found in open fields and disturbed areas. While not extensively used in herbal medicine, it has been employed for its potential astringent and diuretic properties. Fleabane has traditionally been used topically to address skin conditions, but further research is needed to fully understand its potential benefits. As with any herbal remedy, it is important to seek professional advice and exercise caution when using fleabane for medicinal purposes.`
	},
	{
		id: 'horsetail',
		classification: {
			family: 'Equisetaceae',
			genus: 'Equisetum',
			species: 'E. arvense'
		},
		name: 'Horsetail',
		otherNames: [
			'Field Horsetail',
			'Common Horsetail',
			'Snake Grass',
			'Pewterwort',
			'Scouring Rush',
			'Shavegrass'
		],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/horsetail.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/horsetail.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/horsetail_2.webP',
				caption: 'Test'
			}
		],
		description: `Horsetail, scientifically known as Equisetum arvense, is a unique and ancient perennial plant that belongs to the Equisetaceae family. It is a primitive plant that has been around for millions of years and is often referred to as a living fossil. Horsetail is widely distributed and can be found in various regions around the world, including North America, Europe, and Asia.

Horsetail is characterized by its distinct appearance. It has a hollow, jointed stem that resembles a horse's tail or a bottle brush, which gives rise to its common name. The stem is segmented, with each segment having a ring of tiny, scale-like leaves. The plant does not produce flowers but reproduces through spores.

From an herbalist's perspective, horsetail has a long history of traditional use and is highly regarded for its potential health benefits. The plant contains various bioactive compounds, including flavonoids, saponins, and silica, which contribute to its medicinal properties.

Horsetail is known for its high silica content, which makes it useful in promoting healthy skin, hair, and nails. Silica is an essential mineral that supports the growth and strength of connective tissues in the body. It is often used in natural beauty and skincare products to improve the condition of the skin, hair, and nails.

In traditional herbal medicine, horsetail is also recognized for its diuretic properties. It has been used to support urinary tract health and promote urine flow, which may help with conditions such as urinary tract infections and edema. The diuretic action of horsetail is believed to be due to its flavonoid and saponin constituents.

Horsetail has also been used to support bone health and assist in the healing of fractures due to its high mineral content, including silica and calcium. It is believed to help strengthen bones, teeth, and nails.

It is important to note that horsetail should be used with caution and under the guidance of a knowledgeable practitioner. The plant contains certain compounds, such as thiaminase, which can deplete thiamine (vitamin B1) levels in the body. Prolonged use or excessive consumption of horsetail may lead to thiamine deficiency.

Additionally, due to its high silica content, horsetail should not be used by individuals with kidney disorders or conditions that affect mineral balance in the body.

In summary, horsetail (Equisetum arvense) is a unique perennial plant known for its distinct appearance and potential health benefits. It has a long history of traditional use and is valued for its high silica content, which supports healthy skin, hair, and nails. Horsetail also has diuretic properties and may assist with urinary tract health. However, it should be used with caution and under professional guidance due to its potential effects on thiamine levels and its contraindications in certain conditions.`
	},
	{
		id: 'motherwort',
		classification: {
			family: 'Lamiaceae',
			genus: 'Leonurus',
			species: 'L. cardiaca'
		},
		name: 'Motherwort',
		otherNames: ['Lion’s Ear', 'Lion’s Tail', 'Throwwort'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_4.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_5.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_6.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_7.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/motherwort_leaf.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lat=%2036.633162&sub=5923&lng=-96.064453&subjectnumber=&map=distribution&zoom=4',
		description: `Motherwort, scientifically known as Leonurus cardiaca, is an herbaceous perennial plant that belongs to the Lamiaceae family. It is native to Europe and central Asia but has naturalized in various regions around the world. Motherwort has a long history of traditional use and is highly regarded for its potential medicinal properties.

Motherwort gets its name from its historical use in supporting women's health, particularly during childbirth and menstruation. The plant has a square stem with deeply lobed, palmate leaves that resemble the shape of a lion's heart, which is how it acquired its scientific name "Leonurus," meaning "lion's tail."

The flowers of motherwort are small and tubular, and they are typically pink or purple in color. They grow in dense clusters along the upper portion of the stem, giving the plant a distinctive appearance. Motherwort blooms from summer to early autumn, attracting bees and other pollinators.

As an herbalist, motherwort is primarily valued for its calming and relaxing properties. It has been used traditionally to support the nervous system and promote a sense of calm during times of stress, anxiety, and tension. Motherwort is believed to have mild sedative effects, helping to ease nervousness and promote relaxation without causing drowsiness.

In addition to its calming effects, motherwort has been used to support cardiovascular health. It is considered a cardiovascular tonic and has been traditionally used to help regulate heart palpitations, promote healthy blood circulation, and support overall heart health. Motherwort is also believed to have mild vasodilatory properties, which may help to relax and widen blood vessels.

Furthermore, motherwort is known for its potential benefits for women's health. It has been used to support menstrual comfort and regulate menstrual cycles. Motherwort is often employed as a uterine tonic, helping to promote normal uterine contractions during childbirth and after delivery. It may also provide relief from menstrual cramps and other discomforts associated with the menstrual cycle.

As with any herbal remedy, it is important to consult with a qualified healthcare practitioner or herbalist before using motherwort, especially during pregnancy or while taking any medications.

In summary, motherwort (Leonurus cardiaca) is an herbaceous perennial plant known for its calming and relaxing properties. It has been traditionally used to support the nervous system, promote cardiovascular health, and provide benefits for women's health. Motherwort is valued for its ability to promote relaxation during times of stress and tension, support heart health, and assist with menstrual discomfort. As with any herbal remedy, professional advice and guidance should be sought before using motherwort for medicinal purposes.`
	},
	{
		id: 'plantain',
		classification: {
			family: 'Plantaginaceae',
			genus: 'Plantago',
			species: 'P. major'
		},
		name: 'Plantain',
		otherNames: ['Broadleaf Plantain', 'Common Plantain', 'Greater Plantain', 'White Man’s Foot'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/plantain.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/plantain.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&sub=6201&lng=-96.064453&zoom=4&map=distribution&lat=%2036.633162',
		description: `Plantago major, commonly known as plantain, is a perennial herbaceous plant that belongs to the Plantaginaceae family. It is not to be confused with the banana-like fruit also known as plantain. Plantain is a versatile and widespread plant that can be found in many regions around the world, including Europe, Asia, and North America. It thrives in various habitats, including lawns, meadows, roadsides, and disturbed areas.

Plantain has a basal rosette growth habit, meaning the leaves emerge from a central point near the ground. The leaves of plantain are oval-shaped, with prominent parallel veins that give them a ribbed appearance. They are typically dark green but may have a reddish tinge. The plant produces tall, slender flower spikes that rise above the leaves. The flowers are small, inconspicuous, and often greenish or whitish in color.

As an herbalist, plantain is highly valued for its medicinal properties and has a long history of traditional use. The leaves of plantain contain various bioactive compounds, including aucubin, tannins, and mucilage, which contribute to its therapeutic effects.

One of the primary traditional uses of plantain is as a soothing herb for the respiratory system. It is often employed to ease coughs, bronchitis, and other respiratory conditions. Plantain leaves can be prepared as an herbal tea or used in respiratory herbal blends to help alleviate irritation and promote healthy lung function.

Plantain is also known for its skin-soothing properties. The leaves contain mucilage, which forms a gel-like substance when combined with water. This gel can be applied topically to soothe minor skin irritations, such as insect bites, rashes, and burns. Plantain leaf poultices or salves are commonly used to provide relief and promote healing.

Furthermore, plantain has been used as a natural remedy for digestive complaints. The herb is believed to possess mild astringent properties that can help tone and support the digestive system. It is often used in herbal preparations to address issues such as diarrhea, gastritis, and indigestion.

In addition to its medicinal uses, plantain leaves are edible and can be incorporated into salads or cooked as a vegetable. The young leaves are generally preferred for culinary purposes as they tend to be more tender and less fibrous.

It's important to note that while plantain is generally considered safe for most individuals, some people may be allergic to the plant. As with any herbal remedy, it is recommended to consult with a qualified healthcare practitioner or herbalist before using plantain, particularly if you have any known allergies or are taking medications.

In summary, plantain (Plantago major) is a versatile and widespread herbaceous plant known for its medicinal properties. It has been traditionally used to soothe respiratory conditions, promote healthy skin, and support digestion. Plantain leaves can be prepared as teas, used topically for skin irritations, or incorporated into culinary preparations. As always, seeking professional advice is recommended before using plantain for medicinal purposes.`
	},
	{
		id: 'raspberry',
		classification: {
			family: 'Rosaceae',
			genus: 'Rubus',
			species: 'R. idaeus'
		},
		name: 'Raspberry',
		otherNames: [],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/raspberry.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/raspberry.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/raspberry_leaf.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&subjectnumber=&zoom=4&sub=9857&lng=-96.064453&map=distribution&lat=%2036.633162',
		description: `Raspberry, scientifically known as Rubus idaeus, is a deciduous shrub belonging to the Rosaceae family. It is a widely cultivated plant known for its delicious and nutritious fruits. Raspberry is native to Europe and Asia but is now cultivated in various parts of the world, including North America.

Raspberry plants typically grow in thickets or patches and can reach heights of 3 to 6 feet (about 1 to 2 meters). They have woody stems with thorns, and the leaves are green, serrated, and composed of three to five leaflets. The plant produces delicate white flowers with five petals that give way to the vibrant red or purple berries we commonly associate with raspberries.

As an herbalist, raspberry is highly regarded for its medicinal and nutritional properties. The ripe berries are rich in vitamins, minerals, antioxidants, and dietary fiber, making them a valuable addition to a healthy diet. Raspberries are known for their sweet and tangy flavor and are enjoyed fresh or used in various culinary preparations, such as jams, pies, and desserts.

Raspberry leaves are also used in herbal medicine and have a long history of traditional use. The leaves are typically harvested before the fruiting season and dried for later use. They contain several bioactive compounds, including tannins, flavonoids, and phenolic acids, which contribute to their medicinal effects.

One of the primary traditional uses of raspberry leaf is for women's health. It has been used to support and tone the reproductive system, particularly during pregnancy and childbirth. Raspberry leaf tea is commonly consumed by pregnant women in their third trimester as it is believed to help strengthen the uterus, facilitate labor, and promote postpartum recovery.

Raspberry leaf is also known for its astringent properties, which can help tone and tighten tissues. It has been used as a herbal remedy for diarrhea, gastrointestinal inflammation, and sore throats. The leaves can be prepared as an herbal tea or incorporated into herbal blends for digestive support.

Furthermore, raspberry leaves contain antioxidants that help protect cells from oxidative damage. These antioxidants may contribute to the overall health-promoting effects of raspberry leaf preparations.

It's important to note that while raspberry leaf is generally considered safe for most individuals, pregnant women should consult with their healthcare provider before using it, especially if they have a history of preterm labor or other pregnancy-related complications.

In summary, raspberry (Rubus idaeus) is a cultivated shrub known for its delicious and nutritious fruits. The berries are rich in vitamins, minerals, antioxidants, and dietary fiber. Raspberry leaves are also used in herbal medicine and have been traditionally used to support women's health, promote digestive wellness, and provide antioxidant benefits. As always, it is advisable to seek professional advice before using raspberry leaf for medicinal purposes, particularly during pregnancy.`
	},
	{
		id: 'st-johns-wort',
		classification: {
			family: 'Hypericaceae',
			genus: 'Hypericum',
			species: 'H. perforatum'
		},
		name: 'St. John’s Wort',
		otherNames: ['Goatweed', 'Klamath Weed', 'Rosin Rose', 'Tipton Weed'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort.webP',
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&zoom=4&map=distribution&lng=-96.064453&lat=%2036.633162&subjectnumber=&sub=4411',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort_4.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort_5.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/st_johns_wort_6.webP',
				caption: 'Test'
			}
		],
		description: `St. John's Wort, scientifically known as Hypericum perforatum, is a perennial herbaceous plant that belongs to the Hypericaceae family. It is native to Europe but has naturalized in various regions around the world. St. John's Wort is highly valued in herbal medicine for its potential therapeutic properties.

St. John's Wort is a hardy plant that grows up to 1 meter in height. It has multiple branches with opposite, oblong leaves that are dotted with tiny translucent glands. The leaves appear perforated when held up to light, which gives rise to its scientific name "perforatum." The plant produces bright yellow flowers with distinctive petals and numerous stamens.

As an herbalist, St. John's Wort is primarily known for its traditional use as a mood-enhancing herb. It has been used to support emotional well-being and promote a positive mood. St. John's Wort is believed to contain various bioactive compounds, including hypericin and hyperforin, which are thought to contribute to its effects on mood.

St. John's Wort is often used as a natural remedy for mild to moderate depression, seasonal affective disorder (SAD), and mood disturbances. It is believed to help balance neurotransmitters in the brain, such as serotonin, dopamine, and norepinephrine, which play a role in regulating mood.

Additionally, St. John's Wort has been used as a nerve tonic and relaxant. It may provide relief from nervous tension, anxiety, and restlessness. The herb is also known for its potential analgesic properties and has been used topically as an oil or salve to soothe minor pains and irritations.

It's important to note that St. John's Wort may interact with certain medications, including antidepressants, anticoagulants, oral contraceptives, and immunosuppressants. It can affect the metabolism and efficacy of these medications, so it is crucial to consult with a qualified healthcare practitioner before using St. John's Wort, especially if you are taking any prescription medications.

Furthermore, St. John's Wort may increase photosensitivity in some individuals, making the skin more sensitive to sunlight. It is advisable to use sun protection measures and avoid excessive sun exposure when using St. John's Wort.

In summary, St. John's Wort (Hypericum perforatum) is a perennial herb known for its potential mood-enhancing properties. It has been traditionally used to support emotional well-being and promote a positive mood. St. John's Wort is also valued for its potential nerve-relaxing and analgesic effects. However, it is essential to exercise caution and consult with a healthcare practitioner before using St. John's Wort, particularly if you are taking any medications.`
	},
	{
		id: 'stinging-nettle',
		classification: {
			family: 'Urticaceae',
			genus: 'Urtica',
			species: 'U. dioica'
		},
		name: 'Stinging Nettle',
		otherNames: ['Common Nettle', 'Nettle', 'Brennessel', 'Burning Nettle', 'Hemp Nettle'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_1.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_1.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_4.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_5.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/stinging_nettle_6.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&lng=-96.064453&map=distribution&lat=%2036.633162&zoom=4&subjectnumber=&sub=6569',
		description: `Stinging nettle, scientifically known as Urtica dioica, is a perennial herbaceous plant that belongs to the Urticaceae family. It is native to Europe, Asia, and North Africa but can now be found in temperate regions worldwide. Stinging nettle is a well-known plant with a long history of traditional use for various medicinal and culinary purposes.

Stinging nettle gets its name from the fine hairs on its leaves and stems that contain formic acid and other irritants. When these hairs come into contact with the skin, they can cause a stinging sensation and temporary discomfort. However, when properly handled and processed, stinging nettle can be used safely and has many potential health benefits.

Stinging nettle is a hardy plant that can grow up to 2 meters in height. It has opposite, serrated leaves that are heart-shaped at the base and pointed at the tip. The stems and leaves are covered in small, hair-like structures that release the irritating substances upon contact. The plant produces small clusters of greenish flowers that eventually give way to small seeds.

As an herbalist, stinging nettle is highly valued for its potential medicinal properties. The leaves, stems, and roots of the plant are used for various therapeutic purposes. Stinging nettle is rich in nutrients, including vitamins (such as vitamin C, vitamin A, and vitamin K), minerals (such as iron, calcium, and magnesium), and phytochemicals (such as flavonoids and lignans).

One of the primary traditional uses of stinging nettle is as a diuretic and detoxifying herb. It has been used to support kidney and urinary system health and promote the elimination of waste and excess fluids from the body. Stinging nettle is believed to help increase urine production and may be used to alleviate symptoms of water retention, urinary tract infections, and kidney stones.

Stinging nettle is also known for its potential anti-inflammatory properties. It has been used to help reduce inflammation in conditions such as arthritis, gout, and allergies. The plant contains compounds that may inhibit pro-inflammatory pathways in the body and modulate the immune response.

Furthermore, stinging nettle has been traditionally used to support healthy skin. It can be applied topically to soothe itching, rashes, and other skin irritations. Stinging nettle extracts and preparations are commonly used in natural skincare products.

In addition to its medicinal uses, stinging nettle is also a nutritious edible plant. The young leaves can be harvested and cooked as a green vegetable or used in herbal teas. Nettle tea is a popular herbal beverage known for its earthy flavor and potential health benefits.

It's important to note that while stinging nettle is generally considered safe for most individuals when used properly, it may cause allergic reactions in some people. It is advisable to wear gloves and exercise caution when handling fresh nettle leaves to avoid the stinging sensation. If you are allergic to plants in the Urticaceae family or have known allergies, it is recommended to consult with a healthcare practitioner before using stinging nettle.

In summary, stinging nettle (Urtica dioica) is a perennial herb known for its potential medicinal and nutritional properties. It has been traditionally used to support kidney and urinary system health, reduce inflammation, and soothe skin irritations. Stinging nettle is also a nutritious edible plant. As with any herbal remedy, it is advisable to seek professional advice and exercise caution, particularly if you have known allergies or are taking any medications.`
	},
	{
		id: 'sumac',
		classification: {
			family: 'Anacardiaceae',
			genus: 'Rhus',
			species: 'R. typhina'
		},
		name: 'Sumac',
		otherNames: ['Staghorn Sumac', 'Velvet Sumac'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/sumac.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/sumac.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/sumac_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/sumac_3.webP',
				caption: 'Test'
			}
		],
		description: `Rhus typhina, commonly known as sumac, is a deciduous shrub or small tree that belongs to the Anacardiaceae family. It is native to North America and is known for its unique and distinctive appearance. Sumac is highly valued for its culinary uses, medicinal properties, and ornamental value.

Sumac typically grows to a height of 10 to 20 feet (3 to 6 meters) and has an open, spreading growth habit. The plant has compound leaves that consist of several pairs of leaflets, usually with a terminal leaflet. The leaflets are elongated and serrated, giving them a feathery or fern-like appearance. In the fall, sumac foliage often turns brilliant shades of red, orange, or purple, adding beauty to the landscape.

One of the most notable features of sumac is its clusters of fruit called drupes. The fruits are small, round, and usually red in color. They are covered in fine hairs, which give them a velvety texture. Sumac fruits are rich in ascorbic acid (vitamin C) and have a tart, citrus-like flavor. They can be used to make a tangy spice or seasoning known as sumac spice, which is popular in Middle Eastern and Mediterranean cuisines.

As an herbalist, sumac has a history of traditional medicinal uses. The bark, leaves, and berries of sumac contain various bioactive compounds, including tannins, flavonoids, and antioxidants, which contribute to its potential health benefits.

Sumac has been used in traditional medicine to alleviate gastrointestinal issues, such as diarrhea, indigestion, and stomach cramps. It is believed to possess astringent properties that can help tone and soothe the digestive system. Sumac can be prepared as an herbal tea or incorporated into digestive blends.

Furthermore, sumac has been used as a topical remedy for skin conditions. The leaves and bark of sumac contain tannins that have been traditionally used to soothe skin irritations, including rashes, itching, and insect bites. Sumac leaves can be crushed and applied topically, or a decoction can be made and used as a wash.

It's important to note that while sumac is generally considered safe for culinary use and topical applications, some individuals may have sensitivities or allergies to the plant. It is recommended to exercise caution and perform a patch test before applying sumac to the skin. Additionally, not all sumac species are edible, so it's essential to identify and use the appropriate species for culinary purposes.

In summary, sumac (Rhus typhina) is a deciduous shrub known for its distinctive appearance, culinary uses, and potential medicinal properties. The plant produces tart, red berries that can be used as a spice in cooking. Sumac has been traditionally used to support digestion and soothe skin irritations. As with any herbal remedy or wild plant, it is advisable to exercise caution, perform proper identification, and seek professional advice if needed.`
	},
	{
		id: 'thistle',
		classification: {
			family: 'Asteraceae',
			genus: 'Cirsium',
			species: 'C. vulgare'
		},
		name: 'Thistle',
		otherNames: [
			'Bull Thistle',
			'Common Thistle',
			'Hard Thistle',
			'Hardheads',
			'Hare Thistle',
			'Hercules Thistle',
			'Hock About',
			'Horse Thistle',
			'Milk Thistle',
			'Nodding Thistle',
			'Plume Thistle'
		],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/thistle.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/thistle.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/thistle_2.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/thistle_3.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/thistle_stem.webP',
				caption: 'Test'
			}
		],
		description: `Cirsium vulgare, commonly known as thistle, is a biennial or perennial herbaceous plant that belongs to the Asteraceae family. Thistles are widespread and can be found in various regions around the world, including Europe, Asia, and North America. While thistles are often considered as invasive weeds, they have been historically used for their medicinal properties and culinary purposes.

Thistles are characterized by their prickly stems, leaves, and flowering heads. They typically grow tall, reaching heights of 2 to 5 feet (about 0.6 to 1.5 meters). The stems are rigid and often covered with sharp spines or prickles. The leaves are deeply lobed and have sharp, toothed edges. Thistles produce beautiful, spiky flower heads that are composed of numerous small flowers. The flowers can vary in color, ranging from purple and pink to white.

As an herbalist, thistle has been used for various medicinal purposes. Different species of thistles have different properties, but Cirsium vulgare, in particular, has been traditionally used for its potential diuretic and detoxifying properties. It is believed to support kidney and urinary system health and promote the elimination of toxins and excess fluids from the body.

Thistle is also known for its potential liver-protective effects. It has been used to support liver health and promote healthy liver function. Thistle extracts are commonly used in herbal formulations for liver support and detoxification.

Furthermore, thistles have been used topically for their potential anti-inflammatory and wound-healing properties. The leaves and stems of some thistle species can be crushed and applied as a poultice to soothe skin irritations, insect bites, and minor wounds. Thistle extracts are also used in some skincare products for their potential benefits.

In terms of culinary uses, thistle has a history of use in traditional cuisines. The young shoots, leaves, and flower heads of certain thistle species are edible and can be prepared in various ways. Thistle shoots and stems can be cooked and eaten similar to asparagus, while the young leaves can be used in salads or cooked as greens. The flower heads can be boiled or roasted and used as an interesting addition to dishes.

However, it is important to note that not all thistle species are edible, and proper identification is crucial to avoid any potential risks or confusion with toxic plants.

In summary, thistle (Cirsium vulgare) is a prickly herbaceous plant known for its potential medicinal properties and culinary uses. Thistles have been historically used for their diuretic, detoxifying, and liver-supportive effects. Some thistle species have been used topically to soothe skin irritations, while certain edible thistle parts can be incorporated into culinary preparations. As always, it is advisable to exercise caution, properly identify thistle species, and seek professional advice before using thistle for medicinal or culinary purposes.`
	},
	{
		id: 'wild-carrot',
		classification: {
			family: 'Apiaceae',
			genus: 'Daucus',
			species: 'D. carota'
		},
		name: 'Wild Carrot',
		otherNames: ['Bird’s Nest', 'Bishop’s Lace', 'Queen Anne’s Lace'],
		image: 'https://herb-codex.us-east-1.linodeobjects.com/images/wild_carrot.webP',
		gallery: [
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/wild_carrot.webP',
				caption: 'Test'
			},
			{
				src: 'https://herb-codex.us-east-1.linodeobjects.com/images/wild_carrot_2.webP',
				caption: 'Test'
			}
		],
		mapUrl:
			'https://maps.eddmaps.org/point/eradication/index.cfm?notitle&sub=5514&subjectnumber=&lat=%2036.633162&lng=-96.064453&zoom=4&map=distribution',
		description: `Daucus carota, commonly known as wild carrot or Queen Anne's lace, is a biennial or perennial flowering plant that belongs to the Apiaceae family. It is native to Europe and parts of Asia but has naturalized in many other regions around the world. Wild carrot is well-known for its delicate, lacy white flowers and its resemblance to its domesticated relative, the carrot.

Wild carrot plants can grow up to 3 feet (1 meter) in height and have slender, hairy stems. The leaves are finely divided and feathery, similar to fern leaves. The plant produces clusters of small white flowers that form a flat, umbrella-shaped inflorescence. In the center of the flower cluster, there is often a single purple or dark red flower, which is sometimes referred to as a "drop of blood."

The taproot of wild carrot is slender and white, similar in shape to a domesticated carrot but smaller and more woody. When the plant is crushed or broken, it emits a distinct carroty fragrance.

As an herbalist, wild carrot has a history of both culinary and medicinal uses. The young leaves of wild carrot are edible and can be used in salads or cooked as greens. However, it is important to note that the mature leaves and stems of wild carrot can be tough and may develop a bitter taste, so they are typically not consumed.

Wild carrot has been traditionally used for its medicinal properties. The seeds and roots of the plant contain various phytochemicals, including flavonoids, coumarins, and volatile oils, which contribute to its potential health benefits.

One of the primary traditional uses of wild carrot is as a diuretic and urinary system tonic. It has been used to support kidney and bladder health and promote urine flow. Wild carrot seeds and roots are believed to possess properties that help cleanse and strengthen the urinary system.

Wild carrot also has a history of use in women's health. It has been used as a natural remedy to support menstrual health and relieve menstrual cramps. The plant contains compounds that may help regulate menstrual flow and provide mild uterine stimulant effects.

In addition, wild carrot has been used topically for its potential wound-healing properties. The crushed leaves or a poultice made from the root can be applied to minor cuts, bruises, and insect bites to soothe the skin and promote healing.

It is worth noting that wild carrot is also a popular plant for attracting beneficial insects, particularly pollinators such as bees and butterflies, due to its abundant nectar-rich flowers.

While wild carrot is generally considered safe when used properly, it is important to exercise caution and seek professional guidance, particularly if you are pregnant, have specific medical conditions, or are taking medications. Additionally, it is essential to properly identify wild carrot and avoid confusion with other similar-looking plants, as some wild plants can be toxic.

In summary, wild carrot (Daucus carota) is a flowering plant with delicate white flowers and a slender, woody taproot. It has a history of culinary and medicinal uses, including support for urinary system health and women's health. Wild carrot leaves are edible when young, and the plant can attract pollinators to the garden. As with any herbal remedy or wild plant, it is advisable to exercise caution, properly identify the plant, and seek professional advice when necessary.`
	}
];
