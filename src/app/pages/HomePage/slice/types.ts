/* --- STATE --- */
export interface HomepageState {
  loading: boolean;
  contents: Contents[];
  error: string;
}

export interface Contents {
  lang_id: string;
  title: string;
  sub_parent: string;
  sort_order: string;
  layout: string;
  media_content: string;
  rich_media: string;
  text_content: string;
  meta_keywords: string;
  meta_description: string;
  meta_title: string;
  uri: string;
}
