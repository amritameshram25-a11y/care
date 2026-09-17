const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`

export const categories = ['Cleansers', 'Moisturizers', 'Serums', 'Sunscreen', 'Face Masks', 'Body Care', 'Makeup', 'Gift Sets']

export const products = [
  { id: 1, name: 'Gentle Foaming Cleanser', category: 'Cleansers', description: 'A soft, low-foam wash for calm, fresh skin.', price: 649, oldPrice: 799, rating: 4.8, reviews: 126, image: image('photo-1556228720-195a672e8a03'), badge: 'Bestseller' },
  { id: 2, name: 'Vitamin C Face Serum', category: 'Serums', description: 'Brightening drops with a smooth, weightless finish.', price: 899, oldPrice: 1199, rating: 4.9, reviews: 208, image: image('photo-1620916566398-39f1143ab7be'), badge: 'New' },
  { id: 3, name: 'Hydrating Daily Moisturizer', category: 'Moisturizers', description: 'Cushiony hydration for a dewy everyday glow.', price: 749, oldPrice: 899, rating: 4.7, reviews: 94, image: image('photo-1611930022073-b7a4ba5fcccd'), badge: 'Bestseller' },
  { id: 4, name: 'Invisible Sunscreen SPF 50', category: 'Sunscreen', description: 'Invisible mineral-to-silk protection, never chalky.', price: 799, oldPrice: 999, rating: 4.8, reviews: 167, image: image('photo-1556228578-8c89e6adf883'), badge: 'New' },
  { id: 5, name: 'Detoxifying Clay Mask', category: 'Face Masks', description: 'A mineral-rich reset for smoother looking pores.', price: 599, oldPrice: 699, rating: 4.6, reviews: 73, image: image('photo-1570194065650-d99fb4bedf0a'), badge: '' },
  { id: 6, name: 'Niacinamide Serum', category: 'Serums', description: 'Balance, refine and visibly even your skin tone.', price: 849, oldPrice: 999, rating: 4.7, reviews: 114, image: image('photo-1608248543803-ba4f8c70ae0b'), badge: 'Bestseller' },
  { id: 7, name: 'Nourishing Body Lotion', category: 'Body Care', description: 'Silky botanical moisture from shoulder to toe.', price: 549, oldPrice: 649, rating: 4.5, reviews: 61, image: image('photo-1608248597279-f99d160bfcbc'), badge: '' },
  { id: 8, name: 'Matte Lipstick - Rosewood', category: 'Makeup', description: 'Soft matte color with a comfortable, nourishing feel.', price: 499, oldPrice: 599, rating: 4.6, reviews: 88, image: image('photo-1586495777744-4413f21062fa'), badge: 'New' },
  { id: 9, name: 'Rose Water Gel Cleanser', category: 'Cleansers', description: 'Refreshing rose water and aloe for a clean finish.', price: 579, oldPrice: 699, rating: 4.4, reviews: 52, image: image('photo-1556229010-6c3f2c9ca5f8'), badge: '' },
  { id: 10, name: 'Cloud Cream Barrier Balm', category: 'Moisturizers', description: 'Comforting ceramides for your skin barrier.', price: 949, oldPrice: 1099, rating: 4.9, reviews: 141, image: image('photo-1600428853876-fb5a850b444f'), badge: 'Bestseller' },
  { id: 11, name: 'Peptide Plump Serum', category: 'Serums', description: 'A silky peptide blend for bouncy, supple skin.', price: 1099, oldPrice: 1299, rating: 4.8, reviews: 79, image: image('photo-1598440947619-2c35fc9aa908'), badge: 'New' },
  { id: 12, name: 'Daily Glow SPF 30', category: 'Sunscreen', description: 'A sheer, glow-boosting veil for every morning.', price: 699, oldPrice: 799, rating: 4.3, reviews: 43, image: image('photo-1556229010-6c3f2c9ca5f8'), badge: '' },
  { id: 13, name: 'Matcha Pore Polish', category: 'Face Masks', description: 'Gentle green tea clay to clarify without drying.', price: 629, oldPrice: 749, rating: 4.5, reviews: 58, image: image('photo-1515377905703-c4788e51af15'), badge: '' },
  { id: 14, name: 'Coconut Milk Body Wash', category: 'Body Care', description: 'Creamy, fragrant-free cleansing for soft skin.', price: 449, oldPrice: 549, rating: 4.4, reviews: 48, image: image('photo-1611085583191-a3b181a88401'), badge: '' },
  { id: 15, name: 'Soft Focus Skin Tint', category: 'Makeup', description: 'Lightweight coverage that lets your real skin glow.', price: 899, oldPrice: 1099, rating: 4.7, reviews: 102, image: image('photo-1522335789203-aabd1fc54bc9'), badge: 'New' },
  { id: 16, name: 'Weekend Glow Gift Set', category: 'Gift Sets', description: 'Three ritual essentials wrapped and ready to gift.', price: 1499, oldPrice: 1899, rating: 4.9, reviews: 37, image: image('photo-1547887538-e3a2f32cb1cc'), badge: 'Bestseller' },
  { id: 17, name: 'Oat Milk Cleansing Balm', category: 'Cleansers', description: 'Melts makeup and daily buildup without tugging.', price: 779, oldPrice: 899, rating: 4.8, reviews: 83, image: image('photo-1598440947619-2c35fc9aa908'), badge: '' },
  { id: 18, name: 'Squalane Dew Cream', category: 'Moisturizers', description: 'A rich, satin finish cream for thirsty skin.', price: 869, oldPrice: 999, rating: 4.6, reviews: 69, image: image('photo-1612817288484-6f916006741a'), badge: '' },
  { id: 19, name: 'Calming Green Tea Drops', category: 'Serums', description: 'Lightweight antioxidant care for reactive days.', price: 829, oldPrice: 949, rating: 4.5, reviews: 55, image: image('photo-1611930022073-b7a4ba5fcccd'), badge: '' },
  { id: 20, name: 'Tinted Sun Veil SPF 40', category: 'Sunscreen', description: 'A skin-loving tint with broad spectrum coverage.', price: 929, oldPrice: 1099, rating: 4.7, reviews: 91, image: image('photo-1556228852-80f8e6b5f9b9'), badge: 'New' },
  { id: 21, name: 'Pink Clay Sunday Mask', category: 'Face Masks', description: 'A five-minute ritual for soft, rosy radiance.', price: 579, oldPrice: 699, rating: 4.4, reviews: 39, image: image('photo-1570194065650-d99fb4bedf0a'), badge: '' },
  { id: 22, name: 'Neroli Hand & Body Cream', category: 'Body Care', description: 'A nourishing cream with a delicate citrus scent.', price: 529, oldPrice: 649, rating: 4.6, reviews: 33, image: image('photo-1608248597279-f99d160bfcbc'), badge: '' },
  { id: 23, name: 'Cream Blush - Petal', category: 'Makeup', description: 'Buildable color for a fresh, just-pinched flush.', price: 579, oldPrice: 699, rating: 4.5, reviews: 47, image: image('photo-1583241800698-e8ab01830a07'), badge: '' },
  { id: 24, name: 'The Complete Glow Ritual', category: 'Gift Sets', description: 'Our signature seven-piece routine in one set.', price: 1899, oldPrice: 2299, rating: 5, reviews: 28, image: image('photo-1556229010-6c3f2c9ca5f8'), badge: 'Bestseller' },
]

export const categoryImages = {
  Cleansers: image('photo-1556228720-195a672e8a03'), Moisturizers: image('photo-1611930022073-b7a4ba5fcccd'), Serums: image('photo-1620916566398-39f1143ab7be'), Sunscreen: image('photo-1556228578-8c89e6adf883'), 'Face Masks': image('photo-1570194065650-d99fb4bedf0a'), 'Body Care': image('photo-1608248597279-f99d160bfcbc'), Makeup: image('photo-1586495777744-4413f21062fa'), 'Gift Sets': image('photo-1547887538-e3a2f32cb1cc'),
}
