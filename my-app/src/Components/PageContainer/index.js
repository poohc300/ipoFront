// PageContainer.js
import React from 'react';
import { Box } from '@mui/material';

const PageContainer = ({ children, maxWidth = '100%', maxHeight = '100%' }) => {
    return (
        <Box
            sx={{
                width: '100%', // 최대 너비를 100%로 설정하여 부모 요소에 맞게 크기를 조정합니다.
                height: '100%', // 최대 높이를 100%로 설정하여 부모 요소에 맞게 크기를 조정합니다.
                maxWidth, // 최대 너비를 props로 전달된 값으로 설정합니다.
                maxHeight, // 최대 높이를 props로 전달된 값으로 설정합니다.
                mx: 'auto', // 가운데 정렬을 위해 좌우 마진을 자동으로 설정합니다.
                p: 1, // 안쪽 패딩을 설정합니다.
                bgcolor: '#f5f7f9', // 배경색을 지정합니다.
                overflowY: 'auto', // Y축 스크롤이 필요할 경우 스크롤바를 추가합니다.
                display: 'flex', // 자식 요소를 가로로 배치하기 위해 flex display를 설정합니다.
                flexDirection: 'column', // 자식 요소를 세로 방향으로 배치합니다.
            }}
        >
            {children}
        </Box>
    );
}

export default PageContainer;
