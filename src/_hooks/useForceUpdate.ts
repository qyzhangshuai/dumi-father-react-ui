import { useState, useCallback } from 'react';
import randomString from '@/_utils/randomString';
function useForceUpdate() {
  const [, setValue] = useState('');
  const handleSetvalue = useCallback(() => setValue(randomString(6)), []);
  return handleSetvalue;
}

export default useForceUpdate;
