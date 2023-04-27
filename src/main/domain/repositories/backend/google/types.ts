export interface GoogleAuthTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
  id_token: string;
}

export interface GetProfileAdminResponse {
  resourceName: string;
  etag: string;
  metadata: {
    sources: {
      type: string;
      id: string;
      etag: string;
      profileMetadata: {
        objectType: string;
        userTypes:  string[];
      },
      updateTime: string;
    }[],
    objectType: string;
  },
  names: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      },
      sourcePrimary: boolean;
    },
    displayName: string;
    familyname: string;
    givenName: string;
    displayNameLastFirst: string;
    unstructuredName: string;
  }[],
  nicknames: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      }
    },
    value: string;
    type: string;
  }[],
  photos: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      }
    };
    url: string;
  }[],
  emailAddresses: {
    metadata:{
      primary: boolean;
      verified: boolean;
      source: {
        type: string;
        id: string;
      },
      sourcePrimary: boolean;
    },
    value: string
  }[],
  genders: {
    metadata: {
      primary: boolean;
      sources: {
        type: string;
        id: string;
      };
    },
    value: string;
    formattedValue: string;
  }[],
  birthdays: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      },
    },
    date: {
      year: number;
      month: number;
      day: number;
    }
  }[],
  addresses: {
    metadata: {
      primary: boolean;
      source: {
        type: string;
        id: string;
      }
    },
    formattedValue: string;
    type: string;
    formattedType: string;
  }[]
}