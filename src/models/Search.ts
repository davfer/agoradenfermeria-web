
export interface SearchResults {
  result: SearchResult[];
  total: number;
  time: number;
  page: number;
}
export interface SearchResult {

  summary_id: string;
  language: string;
  title: string;
  subtitle: string;
  page: string;
  keywords: string;
  id: string;
  magazine_id: string;
  section_id: string;
  position: string;

  authors: {
    id: string;
    shown: string;
  }[];
  magazine: Magazine;
  section: SummarySection;
}
