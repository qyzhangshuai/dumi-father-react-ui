import { useMemo } from 'react';
import { defaultPrefixCls } from '../_utils/config';

export default function usePrefixCls(backClassName: string) {
  return useMemo(
    () => `${defaultPrefixCls}${backClassName ? '-' + backClassName : ''}`,
    [backClassName],
  );
}
