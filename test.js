let cards=[1,4,5,6,7,8]
for(i=0;i<cards.length;i++){
    console.log(i)
    let j=Math.floor(Math.random()*(i+1))
    console.log(j)
    let temp=cards[i]
    cards[i]=cards[j]
    cards[j]=temp
}
console.log(cards)
