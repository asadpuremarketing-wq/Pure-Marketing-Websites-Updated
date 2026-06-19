export type VideoItem = {
  id: string;
  title: string;
  client: string;
  platform: "youtube" | "vimeo";
  thumbnail: string;
};

export type VideoIndustry = {
  label: string;
  description: string;
  videos: VideoItem[];
};

// How to add a video:
//   platform "youtube" → id is everything after "v=" or after "shorts/"
//   platform "vimeo"   → id is the number at the end of the Vimeo URL
//   thumbnail (YouTube) → https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
//   thumbnail (Vimeo)   → https://vumbnail.com/VIDEO_ID.jpg
// Max 6 videos per industry — extras are ignored.

export const VIDEO_INDUSTRIES: VideoIndustry[] = [
  {
    label: "Restaurants",
    description: "Menu highlights, behind-the-scenes, and atmosphere videos that bring customers through the door.",
    videos: [
      { id: "IcgsOJq0dK0", title: "Restaurant Promo", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/IcgsOJq0dK0/hqdefault.jpg" },
      { id: "M0pv-XnR_mQ", title: "Daily Special", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/M0pv-XnR_mQ/hqdefault.jpg" },
      { id: "AzdQaMGmfr8", title: "Menu Highlight Reel", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/AzdQaMGmfr8/hqdefault.jpg" },
      { id: "EU8egW9cH24", title: "Behind the Kitchen", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/EU8egW9cH24/hqdefault.jpg" },
      { id: "u_ostY3YI9A", title: "Food Showcase", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/u_ostY3YI9A/hqdefault.jpg" },
      { id: "ivzoQrtKHbQ", title: "Chef's Special", client: "Restaurant Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/ivzoQrtKHbQ/hqdefault.jpg" },
    ],
  },
  {
    label: "Skilled Trades",
    description: "Project transformations, team intros, and trust-building content that wins more jobs.",
    videos: [
      { id: "376WiZf6K-Y", title: "Project Showcase", client: "Gravity Contractors", platform: "youtube", thumbnail: "https://img.youtube.com/vi/376WiZf6K-Y/hqdefault.jpg" },
      { id: "73a1YRv6Jxg", title: "Work in Progress", client: "Gravity Contractors", platform: "youtube", thumbnail: "https://img.youtube.com/vi/73a1YRv6Jxg/hqdefault.jpg" },
      { id: "M9geiti29e8", title: "Team in Action", client: "Gravity Contractors", platform: "youtube", thumbnail: "https://img.youtube.com/vi/M9geiti29e8/hqdefault.jpg" },
      { id: "HLdEx2YL3ZY", title: "Before & After", client: "Gravity Contractors", platform: "youtube", thumbnail: "https://img.youtube.com/vi/HLdEx2YL3ZY/hqdefault.jpg" },
    ],
  },
  {
    label: "Real Estate",
    description: "Property tours, agent brand videos, and neighbourhood highlights that close more deals.",
    videos: [
      { id: "bJb4WXrcPQI", title: "Property Tour", client: "Real Estate Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/bJb4WXrcPQI/hqdefault.jpg" },
      { id: "nph1aES_o7g", title: "Home Showcase", client: "Real Estate Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/nph1aES_o7g/hqdefault.jpg" },
      { id: "IWtmfdnQQ6Y", title: "Listing Highlight", client: "Real Estate Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/IWtmfdnQQ6Y/hqdefault.jpg" },
      { id: "1zMVRTq8C3U", title: "Neighbourhood Reel", client: "Real Estate Client", platform: "youtube", thumbnail: "https://img.youtube.com/vi/1zMVRTq8C3U/hqdefault.jpg" },
    ],
  },
];
