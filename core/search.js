const Heap = require('heap-js');
const { Tag } = require('./classes');
function search(catalog, image) {
    scores = {}
    for (let product in catalog){
        scores[product.id] = match(product, image);
    }
    const matchComparator = (productId1, productId2) =>  scores[productId1] - scores[productId2];
    const maxheap = new Heap.Heap(matchComparator)
    maxheap.init()
    maxheap.limit = 5
    maxheap.push(...Object.keys(scores))
    return maxheap
}

function match(product, image) {
    score = 0
    for (productimage in product.images) {
        for (tag in productimage.tags){
            for (imagetag in image.tags){
                if (tag["label"] == imagetag["label"]){
                    score = score + tag["score"]*tag["score"]
                }
            }
        }
    }
    score = score / product.images.length
    
}

main_str = "HE RAN THERE"
sub_str = "HE"
main_str += '';
    sub_str += '';
    console.log(main_str.match(/HE/g).length)