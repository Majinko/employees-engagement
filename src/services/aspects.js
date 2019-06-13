import request from '../api/request';
import { endpoint } from './../config';

import { authHeader } from './../helpers/auth-header';

export const postFeedback = async feedback => {
  try {
    const data = await request(`${endpoint}/rating/store`, {
      method: 'post',
      headers: authHeader(),
      data: {
        relatedUserId: feedback.relatedUserId,
        ids: feedback.ids,
        payload: feedback.payload,
        wantsToMeet: feedback.wantsToMeet,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
