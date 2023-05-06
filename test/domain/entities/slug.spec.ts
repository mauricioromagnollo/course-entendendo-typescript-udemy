import { test, expect } from "vitest";
import { Slug } from "../../../src/domain/entities/slug";

test('should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toBe('example-question-title')
})