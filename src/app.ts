import { nftsList } from "./bdd/nft.js"
import { nftType } from "./types/types"

function cloneCard() {
  const card = document.querySelector('.main-card') as HTMLElement
  const cardClone = card.cloneNode(true)
  document.querySelector('.card-container')?.appendChild(cardClone)
  return cardClone
}

function createCard(data: nftType) {
  const card = cloneCard() as HTMLElement
  populateCard(card, data)
}

function populateCard(card: HTMLElement, data: nftType) {
  const title = card.querySelector('.title') as HTMLHeadingElement
  title.textContent = data.title

  const description = card.querySelector('.description') as HTMLParagraphElement
  description.textContent = data.description

  const creator = card.querySelector('.creator-name') as HTMLSpanElement
  creator.textContent = data.creator

  const img = card.querySelector('.main-image') as HTMLImageElement
  img.src = data.img

  const price = card.querySelector('.eth') as HTMLSpanElement
  price.textContent = data.price

  const expire = card.querySelector('.expire') as HTMLSpanElement
  expire.textContent = data.expire

  const avatar = card.querySelector('.avatar') as HTMLImageElement
  avatar.src = data.avatar
}

nftsList.map((item) => {
  return createCard(item)
})
