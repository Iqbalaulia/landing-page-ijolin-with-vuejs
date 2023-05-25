import axios from "axios";
import { Message } from "element-ui";

const Api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "Authorization",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  mode: "no-cors",
  credentials: true,
  crossdomain: true,
});

// declare a request interceptor
Api.interceptors.request.use(
  (config) => {
    const LocalDataVuex = JSON.parse(
      window.localStorage.getItem("storeonklas")
    );
    // kalo url yang diakses dari koperasi ganti pake token koperasi
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${
        (LocalDataVuex && LocalDataVuex.userToken) || ""
      }`,
    };
    return config;
  },
  (error) => {
    // handle the error
    return Promise.reject(error);
  }
);

export function ApiGetRequest(url, data = {}) {
  return Api.get(url, {
    params: data,
  })
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
}

export function ApiPostMultipart(url, data = {}) {
  return Api.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
}

export function ApiGetUploadFile(url, data = {}, callbackUpload = () => {}) {
  return Api.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (event) => callbackUpload(event),
  })
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
}

export const ApiPostRequest = (url, data = {}) => {
  return Api.post(url, data)
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
};

export const ApiPutRequest = (url, data = {}) => {
  return Api.put(url, data)
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
};

export const ApiDeleteRequest = (url, data = {}) => {
  return Api.delete(url, data)
    .then((response) => response)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {
        error:
          (error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message) || error,
        errorList:
          error.response && error.response.data && error.response.data.errors,
      };
    });
};
export const ApiNotification = (type = "success", message = "") => {
  Message({
    type: type,
    message: message,
  });

  return true;
};
export default {
  Api: Api,
};
