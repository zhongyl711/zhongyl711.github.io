## wireshark抓的http包
```javascript
// 原始十六进制数据
const rawHexData = `
0000   00 50 56 82 26 78 f0 18 98 3d 48 d2 08 00 45 00
0010   03 4b 00 00 40 00 40 06 4a 34 c0 a8 64 21 c0 a8
0020   08 07 e5 7f 1f 40 fa b5 74 17 af 18 e1 0d 80 18
0030   08 0a 52 14 00 00 01 01 08 0a 1d 59 92 4f 45 49
0040   e0 89 47 45 54 20 2f 73 65 63 6c 69 6e 65 5f 70
0050   63 5f 63 6c 69 65 6e 74 2f 73 63 65 6e 65 2e 68
0060   74 6d 6c 3f 73 63 65 6e 65 5f 6b 65 79 3d 69 6e
0070   64 65 78 5f 65 78 74 65 6e 73 69 6f 6e 70 6c 61
0080   6e 5f 73 63 65 6e 65 20 48 54 54 50 2f 31 2e 31
0090   0d 0a 48 6f 73 74 3a 20 31 39 32 2e 31 36 38 2e
00a0   38 2e 37 3a 38 30 30 30 0d 0a 55 73 65 72 2d 41
00b0   67 65 6e 74 3a 20 4d 6f 7a 69 6c 6c 61 2f 35 2e
00c0   30 20 28 4d 61 63 69 6e 74 6f 73 68 3b 20 49 6e
00d0   74 65 6c 20 4d 61 63 20 4f 53 20 58 20 31 30 5f
00e0   31 35 5f 37 29 20 41 70 70 6c 65 57 65 62 4b 69
00f0   74 2f 35 33 37 2e 33 36 20 28 4b 48 54 4d 4c 2c
0100   20 6c 69 6b 65 20 47 65 63 6b 6f 29 20 43 68 72
0110   6f 6d 65 2f 31 32 37 2e 30 2e 30 2e 30 20 53 61
0120   66 61 72 69 2f 35 33 37 2e 33 36 0d 0a 41 63 63
0130   65 70 74 3a 20 74 65 78 74 2f 68 74 6d 6c 2c 61
0140   70 70 6c 69 63 61 74 69 6f 6e 2f 78 68 74 6d 6c
0150   2b 78 6d 6c 2c 61 70 70 6c 69 63 61 74 69 6f 6e
0160   2f 78 6d 6c 3b 71 3d 30 2e 39 2c 69 6d 61 67 65
0170   2f 61 76 69 66 2c 69 6d 61 67 65 2f 77 65 62 70
0180   2c 69 6d 61 67 65 2f 61 70 6e 67 2c 2a 2f 2a 3b
0190   71 3d 30 2e 38 2c 61 70 70 6c 69 63 61 74 69 6f
01a0   6e 2f 73 69 67 6e 65 64 2d 65 78 63 68 61 6e 67
01b0   65 3b 76 3d 62 33 3b 71 3d 30 2e 37 0d 0a 41 63
01c0   63 65 70 74 2d 45 6e 63 6f 64 69 6e 67 3a 20 67
01d0   7a 69 70 2c 20 64 65 66 6c 61 74 65 0d 0a 41 63
01e0   63 65 70 74 2d 4c 61 6e 67 75 61 67 65 3a 20 7a
01f0   68 2d 43 4e 2c 7a 68 3b 71 3d 30 2e 39 0d 0a 43
0200   61 63 68 65 2d 43 6f 6e 74 72 6f 6c 3a 20 6d 61
0210   78 2d 61 67 65 3d 30 0d 0a 43 6f 6f 6b 69 65 3a
0220   20 73 65 73 73 69 6f 6e 5f 69 64 3d 53 53 49 44
0230   5f 32 3b 20 74 6f 6b 65 6e 3d 65 79 4a 68 62 47
0240   63 69 4f 69 4a 49 55 7a 49 31 4e 69 49 73 49 6e
0250   52 35 63 43 49 36 49 6b 70 58 56 43 4a 39 2e 65
0260   79 4a 7a 62 33 56 79 59 32 56 66 64 48 6c 77 5a
0270   53 49 36 49 6e 56 7a 5a 58 49 69 4c 43 4a 7a 62
0280   33 56 79 59 32 56 66 61 57 51 69 4f 69 49 79 49
0290   69 77 69 5a 58 68 77 49 6a 6f 78 4e 7a 49 79 4e
02a0   54 67 32 4d 7a 55 30 4c 43 4a 70 59 58 51 69 4f
02b0   6a 45 33 4d 6a 49 30 4f 54 59 7a 4e 54 51 73 49
02c0   6e 42 6c 63 6d 31 70 64 46 39 30 59 57 64 7a 49
02d0   6a 6f 69 4b 69 4a 39 2e 72 7a 72 6b 71 4f 6d 36
02e0   50 71 6e 39 52 76 39 42 78 30 31 67 50 38 46 45
02f0   6e 77 6d 4d 6c 79 41 79 6f 4c 39 4a 76 67 52 36
0300   2d 70 77 0d 0a 49 66 2d 4e 6f 6e 65 2d 4d 61 74
0310   63 68 3a 20 57 2f 22 38 30 34 2d 68 2b 63 65 6b
0320   59 66 71 31 63 30 72 64 65 31 62 44 47 62 42 2b
0330   6c 4e 4e 64 4f 55 22 0d 0a 55 70 67 72 61 64 65
0340   2d 49 6e 73 65 63 75 72 65 2d 52 65 71 75 65 73
0350   74 73 3a 20 31 0d 0a 0d 0a
`;

// 移除行号和空格，只保留十六进制数据
const hexString = rawHexData
    .split('\n')
    .map(line => line.slice(6)) // 去除行号和空格
    .join('')
    .replace(/\s+/g, '');

// 将十六进制字符串转换为字节数组
function hexToBytes(hex) {
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}

// 转换为字节数组
const bytes = hexToBytes(hexString);

// 将字节数组转换为可读字符串
function bytesToString(bytes) {
    return String.fromCharCode.apply(null, bytes);
}

// 解析以太网帧头部
function parseEthernetFrame(bytes) {
    return {
        destinationMAC: bytes.slice(0, 6).map(b => b.toString(16).padStart(2, '0')).join(':'),
        sourceMAC: bytes.slice(6, 12).map(b => b.toString(16).padStart(2, '0')).join(':'),
        etherType: '0x' + bytes.slice(12, 14).map(b => b.toString(16).padStart(2, '0')).join('')
    };
}

// 解析IP头部
function parseIPHeader(bytes) {
    // 这里头部长度计算是固定处理 IPv4了
    // 理论上应该判断 IPv4 需要动态计算 还是 IPv6头部固定40字节 或者 其他
    // 以太网帧的12位和13位  12位置高8位 ｜ 13位置低八位 下面的处理方式组合起来就是etherType
    // IPv4 0x0800 0800 表示后续是IPv4报文
    // IPv6 0x86DD 86DD 表示后续是IPv6报文
    // const etherType = (packetBytes[12] << 8) | packetBytes[13];

    // 这里乘 4 是由于IPv4头部单位长度是4字节，而IPv6头部长度是8字节
    const headerLength = (bytes[14] & 0x0F) * 4;
    return {
        version: (bytes[14] >> 4),
        headerLength: headerLength,
        ToS: bytes[15], // 这8位表示 服务类型 具体见协议 网络层 ipv4
        totalLength: (bytes[16] << 8) | bytes[17],
        identification: (bytes[18] << 8) | bytes[19],
        flags: (bytes[20] >> 5).toString(2).padStart(3, '0'), // 这里显示二进制 010，含义可以查看协议/网络层/ipv4
        fragmentOffset: (bytes[20] & 0x1F) << 8 | bytes[21],
        ttl: bytes[22], // 对应的值64 // unix系统一般是64 windows 128 路由器啥的 255
        protocol: bytes[23], // 下层协议 6 表示tcp 协议相关对照表 https://www.rfc-editor.org/rfc/rfc790
        headerChecksum: (bytes[24] << 8) | bytes[25],
        sourceIP: bytes.slice(26, 30).join('.'), // c0 a8 64 21 192.168.100.33
        destinationIP: bytes.slice(30, 34).join('.') // c0 a8 08 07 192.168.8.7
        // 这里面没有options 及 padding填充 一般应该都没有 因为路由不支持  
    };
}

// 解析TCP头部
function parseTCPHeader(bytes, ipHeaderLength) {
    const start = 14 + ipHeaderLength; // ipHeaderLength 上面是常见情况 20
    const dataOffset = ((bytes[start + 12] & 0xf0) >> 4) * 4; // TCP头部长度
    return {
        sourcePort: (bytes[start] << 8) | bytes[start + 1], // 58751 源端口号占用2字节
        destinationPort: (bytes[start + 2] << 8) | bytes[start + 3], // 8000 目标端口号占用2字节
        sequenceNumber: ((bytes[start + 4] << 24) | (bytes[start + 5] << 16) | (bytes[start + 6] << 8) | bytes[start + 7]) >>> 0, // 32位序列号 4字节
        acknowledgementNumber: ((bytes[start + 8] << 24) | (bytes[start + 9] << 16) | (bytes[start + 10] << 8) | bytes[start + 11]) >>> 0, // 32位确认号 4字节
        dataOffset: dataOffset,
        flags: bytes[start + 13] & 0x3F, // 取标志位
        windowSize: (bytes[start + 14] << 8) | bytes[start + 15],
        checksum: (bytes[start + 16] << 8) | bytes[start + 17],
        urgentPointer: (bytes[start + 18] << 8) | bytes[start + 19]
    };
}

// 解析HTTP数据
function parseHTTPData(bytes, ipHeaderLength, tcpHeaderLength) {
    const start = 14 + ipHeaderLength + tcpHeaderLength;
    const httpData = bytes.slice(start).map(b => String.fromCharCode(b)).join('');
    return httpData;
}

// 解析整个数据包
const ethernetFrame = parseEthernetFrame(bytes);
const ipHeader = parseIPHeader(bytes);
const tcpHeader = parseTCPHeader(bytes, ipHeader.headerLength);
const httpData = parseHTTPData(bytes, ipHeader.headerLength, tcpHeader.dataOffset);

console.log('Ethernet Frame:', ethernetFrame);
console.log('IP Header:', ipHeader);
console.log('TCP Header:', tcpHeader);
console.log('HTTP Data:', httpData);
```
