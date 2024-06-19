type SheetData = {
  step_no: number;
  head_step_no: string;
  topics: Topic[];
};

type Topic = {
  id: string;
  step_no: number;
  sl_no_in_step: number;
  head_step_no: string;
  title: string;
  post_link: null | string;
  yt_link: null | string;
  cs_link: string;
  gfg_link: null | string;
  lc_link: null | string;
  company_tags: null;
  difficulty: number | null;
  ques_topic: null | string;
};

type Problem = {
  dislikes?: number;
  content?: string;
  topics?: {
    "topic-id"?: string;
    "topic-title"?: string;
  }[];
  aid?: string;
  title?: string;
  category_tag?: string;
  video?: string;
  slug?: string;
  preview?: string;
  publishedOn?: string;
  likes?: number;
};
