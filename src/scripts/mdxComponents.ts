// @ts-nocheck
import Link from "../components/link.astro";
import UnorderedList from "../components/unorderedList.astro";
import UnorderedListItem from "../components/unorderedListItem.astro";

export const mdxComponents = {
  a: Link,
  ul: UnorderedList,
  li: UnorderedListItem,
};
