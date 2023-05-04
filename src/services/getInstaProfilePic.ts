import axios from "axios"


export async function getInstaProfilePic(username: string): Promise<string> {
  const META_ACCESS_TOKEN =
  "EAANoHIccAosBADZADAhVbmMbW0lepEzQLzvwgy1ChEvhL3xNPRUZBCw0wj3ZAMgAY9ZC799MGzvjfMQyTOhcRJawk9hWgPleWvVwEbnPtyxzpT9rwnlOARuvQwJMeLGmMaYsFMcMdDsl5lqcJ9n3LXyi6clrT5ZCpzEZAsEighIjWNzFa6oZAG9aSrES5hQxKkZD"

  const url = "https://graph.instagram.com/" + username + "?fields=id,username,profile_picture&access_token=" + META_ACCESS_TOKEN;

  const response = await axios.get(url);
  const profilePic = response.data.profile.picture_url;

  return profilePic;
}