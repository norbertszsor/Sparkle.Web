export type KeyValuePair<TKey, TValue> = {
  key: TKey;
  value: TValue;
};

export function mapToDictionary<TKey, TValue>(
  object: any
): Dictionary<TKey, TValue> {
  return Object.entries(object).map(([key, value]) => ({
    key: key as TKey,
    value: value as TValue,
  }));
}

export interface Dictionary<TKey, TValue>
  extends Array<KeyValuePair<TKey, TValue>> {}
