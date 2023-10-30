import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
const Footer = () => {
  const StyledDiv = styled('div')({
    width: '100%',
  });
  const FooterSection = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff', // Thay đổi màu nền ở đây
  });

  return (
    <Container>
      <FooterSection>
        <StyledDiv>
          <Typography variant="body1" align="center">
            Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch
            kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được
            cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
          </Typography>
        </StyledDiv>
      </FooterSection>
    </Container>
  );
};

export default Footer;
