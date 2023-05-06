import { randomUUID } from "node:crypto"
import { Slug } from "./slug"

type QuestionProps = {
  title: string
  content: string
  slug: Slug
  authorId: string
}

class Question {
  public id: string
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}

export {
  Question
}